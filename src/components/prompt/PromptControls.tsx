import React from 'react';
import { Select } from '../ui/Select';
import type { PromptCategory, PromptStyle, PromptTone } from '../../types';

interface PromptControlsProps {
  category: PromptCategory;
  style: PromptStyle;
  tone: PromptTone;
  onCategoryChange: (value: PromptCategory) => void;
  onStyleChange: (value: PromptStyle) => void;
  onToneChange: (value: PromptTone) => void;
}

export function PromptControls({
  category,
  style,
  tone,
  onCategoryChange,
  onStyleChange,
  onToneChange,
}: PromptControlsProps) {
  return (
    <div className="space-y-6">
      <Select
        label="Category"
        value={category}
        onChange={(value) => onCategoryChange(value as PromptCategory)}
        options={[
          { value: 'writing', label: 'Writing' },
          { value: 'visual', label: 'Visual Art' },
          { value: 'business', label: 'Business' },
          { value: 'programming', label: 'Programming' },
          { value: 'custom', label: 'Custom' },
        ]}
      />

      <Select
        label="Style"
        value={style}
        onChange={(value) => onStyleChange(value as PromptStyle)}
        options={[
          { value: 'professional', label: 'Professional' },
          { value: 'creative', label: 'Creative' },
          { value: 'technical', label: 'Technical' },
          { value: 'casual', label: 'Casual' },
        ]}
      />

      <Select
        label="Tone"
        value={tone}
        onChange={(value) => onToneChange(value as PromptTone)}
        options={[
          { value: 'formal', label: 'Formal' },
          { value: 'casual', label: 'Casual' },
          { value: 'humorous', label: 'Humorous' },
          { value: 'serious', label: 'Serious' },
        ]}
      />
    </div>
  );
}