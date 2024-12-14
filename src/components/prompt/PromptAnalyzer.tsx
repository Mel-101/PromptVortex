import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { PromptAnalysis } from '../../types/prompt';

interface PromptAnalyzerProps {
  analysis: PromptAnalysis;
}

export function PromptAnalyzer({ analysis }: PromptAnalyzerProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-secondary">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary">Prompt Analysis</h3>
        <div className="flex items-center">
          <span className="text-sm text-secondary-dark mr-2">Quality Score:</span>
          <span className={`text-lg font-bold ${
            analysis.score >= 8 ? 'text-green-500' :
            analysis.score >= 6 ? 'text-yellow-500' :
            'text-red-500'
          }`}>
            {analysis.score}/10
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="flex items-center text-sm font-medium text-green-600 mb-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Strengths
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-primary">
            {analysis.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="flex items-center text-sm font-medium text-red-600 mb-2">
            <XCircle className="h-4 w-4 mr-2" />
            Areas for Improvement
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-primary">
            {analysis.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="flex items-center text-sm font-medium text-blue-600 mb-2">
            <AlertCircle className="h-4 w-4 mr-2" />
            Suggestions
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-primary">
            {analysis.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}