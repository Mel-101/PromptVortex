import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { GripVertical, X } from 'lucide-react';
import type { PromptBlock } from '../../../types/prompt';

interface PromptBlockItemProps {
  block: PromptBlock;
  index: number;
  onRemove: (id: string) => void;
  onUpdate: (index: number, content: string) => void;
}

export function PromptBlockItem({ block, index, onRemove, onUpdate }: PromptBlockItemProps) {
  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="flex items-start space-x-2 bg-white p-4 rounded-lg shadow-sm border border-secondary"
        >
          <div {...provided.dragHandleProps} className="mt-2">
            <GripVertical className="h-5 w-5 text-secondary-dark" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-primary capitalize">
                {block.type}
              </span>
              <button
                onClick={() => onRemove(block.id)}
                className="text-secondary-dark hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <textarea
              value={block.content}
              onChange={(e) => onUpdate(index, e.target.value)}
              className="w-full min-h-[100px] p-2 rounded-md border border-secondary"
              placeholder={`Enter ${block.type} details...`}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
}