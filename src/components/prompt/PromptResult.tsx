import React from 'react';

interface PromptResultProps {
  prompt: string;
}

export function PromptResult({ prompt }: PromptResultProps) {
  if (!prompt) return null;

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-primary">Generated Prompt</label>
      <div className="mt-1 p-4 bg-secondary-light rounded-md border border-secondary">
        <p className="text-primary">{prompt}</p>
      </div>
    </div>
  );
}