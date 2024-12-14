import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../ui/Button';
import type { PromptBlock } from '../../../types/prompt';

interface BlockTypeSelectorProps {
  value: PromptBlock['type'];
  onChange: (value: PromptBlock['type']) => void;
  onAdd: () => void;
}

export function BlockTypeSelector({ value, onChange, onAdd }: BlockTypeSelectorProps) {
  return (
    <div className="flex items-center space-x-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as PromptBlock['type'])}
        className="rounded-md border-secondary p-2"
      >
        <option value="context">Context</option>
        <option value="instruction">Instruction</option>
        <option value="example">Example</option>
        <option value="constraint">Constraint</option>
        <option value="output-format">Output Format</option>
      </select>
      <Button onClick={onAdd} icon={Plus}>Add Block</Button>
    </div>
  );
}