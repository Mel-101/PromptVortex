import { useCallback } from 'react';
import type { PromptBlock } from '../types/prompt';

export function usePromptBlocks(blocks: PromptBlock[], onChange: (blocks: PromptBlock[]) => void) {
  const addBlock = useCallback((type: PromptBlock['type']) => {
    const newBlock: PromptBlock = {
      id: crypto.randomUUID(),
      type,
      content: '',
      order: blocks.length,
    };
    onChange([...blocks, newBlock]);
  }, [blocks, onChange]);

  const removeBlock = useCallback((id: string) => {
    onChange(blocks.filter(block => block.id !== id));
  }, [blocks, onChange]);

  const updateBlock = useCallback((index: number, content: string) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...blocks[index], content };
    onChange(newBlocks);
  }, [blocks, onChange]);

  const reorderBlocks = useCallback((sourceIndex: number, destinationIndex: number) => {
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(sourceIndex, 1);
    items.splice(destinationIndex, 0, reorderedItem);
    onChange(items.map((item, index) => ({ ...item, order: index })));
  }, [blocks, onChange]);

  return {
    addBlock,
    removeBlock,
    updateBlock,
    reorderBlocks,
  };
}