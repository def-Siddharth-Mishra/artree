import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'; // Assuming Popover components exist from ShadCN

// Re-add Popover components if they weren't added by ShadCN init.
// Run `npx shadcn-ui@latest add popover` if you get errors.
// Since this is a custom component, ensure Popover is installed.

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selectedOptions: string[]) => void;
  placeholder?: string;
  label: string;
}

/**
 * MultiSelect component for selecting multiple options from a list using checkboxes.
 * It uses ShadCN's Popover, Checkbox, and Button components.
 *
 * @param {MultiSelectProps} props - Props for the MultiSelect component.
 * @returns {JSX.Element} The MultiSelect component.
 */
export function MultiSelect({ options, selected, onChange, placeholder = 'Select items', label }: MultiSelectProps) {
  const handleCheckboxChange = (option: string, isChecked: boolean) => {
    if (isChecked) {
      onChange([...selected, option]);
    } else {
      onChange(selected.filter((item) => item !== option));
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start text-left font-normal rounded-md">
            {selected.length > 0 ? selected.join(', ') : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2">
          <div className="grid gap-2">
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`checkbox-${option}`}
                  checked={selected.includes(option)}
                  onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                />
                <label
                  htmlFor={`checkbox-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
