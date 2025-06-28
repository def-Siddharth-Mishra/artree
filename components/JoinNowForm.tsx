"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
// import { toast } from "sonner";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Spanish", "French", "German", "Hindi", "Mandarin"];
const feeRanges = ["$100 - $500", "$500 - $1000", "$1000 - $2000", "$2000+"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2),
  bio: yup.string().required("Bio is required").min(20),
  category: yup.array().of(yup.string()).min(1, "Select at least one category").required(),
  languages: yup.array().of(yup.string()).min(1, "Select at least one language").required(),
  location: yup.string().required("Location is required").min(2),
  feeRange: yup.string().required("Fee range is required"),
  profileImage: yup.mixed().notRequired(),
});

export function JoinNowForm() {
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      location: "",
      feeRange: "",
      profileImage: undefined,
    },
  });

  // Use the inferred type from useForm for the onSubmit handler
  // Use the type from useForm for the onSubmit handler to avoid type mismatch
  const onSubmit = (data: {
    name: string;
    bio: string;
    category: (string | undefined)[];
    languages: (string | undefined)[];
    location: string;
    feeRange: string;
    profileImage?: any;
  }) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      // TODO: Add toast notification (e.g., with shadcn/ui or sonner) after installing the package
      alert("Artist onboarded successfully!");
      console.log("Onboarded Artist:", data);
      reset();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col gap-6">
      <h2 className="text-2xl font-bold mb-2 text-center">Join Artree as an Artist</h2>
      <p className="text-gray-500 dark:text-gray-300 mb-4 text-center">Fill out the form to get listed and start receiving bookings.</p>
      {/* Name */}
      <div>
        <Label htmlFor="name">Name</Label>
        <Controller name="name" control={control} render={({ field }) => (
          <Input id="name" placeholder="Artist Name" aria-label="Artist Name" {...field} />
        )} />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
      </div>
      {/* Bio */}
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Controller name="bio" control={control} render={({ field }) => (
          <Textarea id="bio" placeholder="Tell us about yourself..." aria-label="Bio" {...field} />
        )} />
        {errors.bio && <span className="text-red-500 text-xs">{errors.bio.message}</span>}
      </div>
      {/* Category */}
      <div>
        <Label>Category</Label>
        <div className="flex flex-wrap gap-4 mt-2">
          {categories.map((cat) => (
            <Controller key={cat} name="category" control={control} render={({ field }) => (
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={field.value?.includes(cat)}
                  onCheckedChange={(checked) => {
                    if (checked) field.onChange([...(field.value || []), cat]);
                    else field.onChange((field.value || []).filter((v: string | undefined) => v !== cat));
                  }}
                  aria-label={cat}
                />
                <span>{cat}</span>
              </label>
            )} />
          ))}
        </div>
        {errors.category && <span className="text-red-500 text-xs">{errors.category.message}</span>}
      </div>
      {/* Languages */}
      <div>
        <Label>Languages</Label>
        <div className="flex flex-wrap gap-4 mt-2">
          {languages.map((lang) => (
            <Controller key={lang} name="languages" control={control} render={({ field }) => (
              <label className="flex items-center gap-2">
                <Checkbox
                  checked={field.value?.includes(lang)}
                  onCheckedChange={(checked) => {
                    if (checked) field.onChange([...(field.value || []), lang]);
                    else field.onChange((field.value || []).filter((v: string | undefined) => v !== lang));
                  }}
                  aria-label={lang}
                />
                <span>{lang}</span>
              </label>
            )} />
          ))}
        </div>
        {errors.languages && <span className="text-red-500 text-xs">{errors.languages.message}</span>}
      </div>
      {/* Location */}
      <div>
        <Label htmlFor="location">Location</Label>
        <Controller name="location" control={control} render={({ field }) => (
          <Input id="location" placeholder="City, Country" aria-label="Location" {...field} />
        )} />
        {errors.location && <span className="text-red-500 text-xs">{errors.location.message}</span>}
      </div>
      {/* Fee Range */}
      <div>
        <Label htmlFor="feeRange">Fee Range</Label>
        <Controller name="feeRange" control={control} render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger id="feeRange" aria-label="Fee Range">
              <SelectValue placeholder="Select fee range" />
            </SelectTrigger>
            <SelectContent>
              {feeRanges.map((fee) => (
                <SelectItem key={fee} value={fee}>{fee}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )} />
        {errors.feeRange && <span className="text-red-500 text-xs">{errors.feeRange.message}</span>}
      </div>
      {/* Profile Image Upload */}
      <div>
        <Label htmlFor="profileImage">Profile Image (optional)</Label>
        <Controller name="profileImage" control={control} render={({ field }) => (
          <Input id="profileImage" type="file" accept="image/*" aria-label="Profile Image" onChange={e => field.onChange(e.target.files?.[0])} />
        )} />
      </div>
      <Button type="submit" className="w-full mt-4" disabled={submitting} aria-label="Submit Artist Onboarding Form">
        {submitting ? "Submitting..." : "Join Now"}
      </Button>
    </form>
  );
}
