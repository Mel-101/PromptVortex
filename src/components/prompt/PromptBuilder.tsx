import React, { useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import type { PromptBlock } from '../../types/prompt';
import { BlockTypeSelector } from './blocks/BlockTypeSelector';
import { PromptBlockItem } from './blocks/PromptBlockItem';
import { usePromptBlocks } from '../../hooks/usePromptBlocks';
import { analyzePrompt } from '../../utils/promptAnalysis';
import { generatePrompt } from '../../utils/promptGeneration';

interface PromptBuilderProps {
  blocks: PromptBlock[];
  onChange: (blocks: PromptBlock[]) => void;
}

export function PromptBuilder({ blocks, onChange }: PromptBuilderProps) {
  const [newBlockType, setNewBlockType] = useState<PromptBlock['type']>('instruction');
  const { addBlock, removeBlock, updateBlock, reorderBlocks } = usePromptBlocks(blocks, onChange);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderBlocks(result.source.index, result.destination.index);
  };

  return (
    <div className="space-y-4">
      <BlockTypeSelector
        value={newBlockType}
        onChange={setNewBlockType}
        onAdd={() => addBlock(newBlockType)}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="blocks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {blocks.map((block, index) => (
                <PromptBlockItem
                  key={block.id}
                  block={block}
                  index={index}
                  onRemove={removeBlock}
                  onUpdate={updateBlock}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}