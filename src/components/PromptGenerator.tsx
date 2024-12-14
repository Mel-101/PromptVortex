import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import type { PromptCategory, PromptStyle, PromptTone } from '../types';
import type { PromptBlock, PromptAnalysis } from '../types/prompt';
import { Button } from './ui/Button';
import { PromptControls } from './prompt/PromptControls';
import { PromptResult } from './prompt/PromptResult';
import { PromptBuilder } from './prompt/PromptBuilder';
import { PromptAnalyzer } from './prompt/PromptAnalyzer';

export function PromptGenerator() {
  const [category, setCategory] = useState<PromptCategory>('writing');
  const [style, setStyle] = useState<PromptStyle>('professional');
  const [tone, setTone] = useState<PromptTone>('formal');
  const [prompt, setPrompt] = useState('');
  const [blocks, setBlocks] = useState<PromptBlock[]>([]);
  const [analysis, setAnalysis] = useState<PromptAnalysis | null>(null);

  const handleGenerate = () => {
    // TODO: Implement actual AI generation logic
    const generatedPrompt = blocks
      .sort((a, b) => a.order - b.order)
      .map(block => `[${block.type.toUpperCase()}]\n${block.content}`)
      .join('\n\n');
    
    setPrompt(generatedPrompt);
    
    // Simulate AI analysis
    setAnalysis({
      score: 7.5,
      strengths: [
        'Clear structure with well-defined blocks',
        'Good use of context setting',
        'Specific output format provided'
      ],
      weaknesses: [
        'Could use more specific examples',
        'Constraints could be more detailed'
      ],
      suggestions: [
        'Add a concrete example to illustrate the desired output',
        'Consider adding more specific constraints about the tone and style',
        'Include any relevant technical requirements or limitations'
      ]
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-secondary">
        <h2 className="text-xl font-semibold text-primary mb-6">Prompt Builder</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <PromptControls
              category={category}
              style={style}
              tone={tone}
              onCategoryChange={setCategory}
              onStyleChange={setStyle}
              onToneChange={setTone}
            />
          </div>
          
          <div className="md:col-span-2">
            <PromptBuilder blocks={blocks} onChange={setBlocks} />
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={handleGenerate} icon={Wand2} className="w-full">
            Generate & Analyze Prompt
          </Button>
        </div>
      </div>

      {prompt && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PromptResult prompt={prompt} />
          {analysis && <PromptAnalyzer analysis={analysis} />}
        </div>
      )}
    </div>
  );
}