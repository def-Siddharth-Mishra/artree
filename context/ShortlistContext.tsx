"use client";
import React, { createContext, useContext, useEffect, useReducer, useState, useMemo } from "react";
import { isClient } from "@/utils/isClient";

export interface Artist {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  bio?: string;
  languages?: string[];
  profileImageUrl?: string;
}

interface ShortlistState {
  artists: Artist[];
}

type ShortlistAction =
  | { type: "ADD_ARTIST"; artist: Artist }
  | { type: "REMOVE_ARTIST"; id: string }
  | { type: "CLEAR_SHORTLIST" }
  | { type: "SET_SHORTLIST"; artists: Artist[] };

interface ShortlistContextType {
  artists: Artist[];
  addArtist: (artist: Artist) => void;
  removeArtist: (id: string) => void;
  clearShortlist: () => void;
  isHydrated: boolean;
}
const ShortlistContext = createContext<ShortlistContextType | undefined>(undefined);

function shortlistReducer(state: ShortlistState, action: ShortlistAction): ShortlistState {
  switch (action.type) {
    case "ADD_ARTIST":
      if (state.artists.find((a) => a.id === action.artist.id)) return state;
      return { artists: [...state.artists, action.artist] };
    case "REMOVE_ARTIST":
      return { artists: state.artists.filter((a) => a.id !== action.id) };
    case "CLEAR_SHORTLIST":
      return { artists: [] };
    case "SET_SHORTLIST":
      return { artists: action.artists };
    default:
      return state;
  }
}

export const ShortlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(shortlistReducer, { artists: [] });
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydration-safe localStorage access
  useEffect(() => {
    if (isClient()) {
      const stored = window.localStorage.getItem("shortlist");
      if (stored) {
        dispatch({ type: "SET_SHORTLIST", artists: JSON.parse(stored) });
      }
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isClient() && isHydrated) {
      window.localStorage.setItem("shortlist", JSON.stringify(state.artists));
    }
  }, [state.artists, isHydrated]);

  const addArtist = (artist: Artist) => dispatch({ type: "ADD_ARTIST", artist });
  const removeArtist = (id: string) => dispatch({ type: "REMOVE_ARTIST", id });
  const clearShortlist = () => dispatch({ type: "CLEAR_SHORTLIST" });

  const value = useMemo(() => ({
    artists: state.artists,
    addArtist,
    removeArtist,
    clearShortlist,
    isHydrated,
  }), [state.artists, isHydrated]);

  return (
    <ShortlistContext.Provider value={value}>
      {children}
    </ShortlistContext.Provider>
  );
};

export function useShortlist() {
  const context = useContext(ShortlistContext);
  if (!context) throw new Error("useShortlist must be used within ShortlistProvider");
  return context;
}
