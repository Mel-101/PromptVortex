import React from 'react';

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; }[];
}

export function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy-900">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-secondary-dark shadow-sm 
                 focus:border-primary focus:ring-primary bg-white text-primary"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}