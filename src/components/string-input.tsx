'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { parseTLV, TLVItem } from '@/lib/tlv-utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Custom error class for validation errors
class ValidationError extends Error {
  position?: number;
  highlightRange?: [number, number];

  constructor(
    message: string,
    position?: number,
    highlightRange?: [number, number]
  ) {
    super(message);
    this.name = 'ValidationError';
    this.position = position;
    this.highlightRange = highlightRange;
  }
}

export function StringInput() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<TLVItem[] | null>(null);
  const [error, setError] = useState<ValidationError | null>(null);
  const [activeTab, setActiveTab] = useState('structured');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError(new ValidationError('Please enter a string to parse'));
      return;
    }

    try {
      // Use the new parseTLV function from our utilities
      const parsedData = parseTLV(inputValue);
      setResult(parsedData);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        // Convert regular Error to ValidationError
        const errorMessage = err.message;
        const positionMatch = errorMessage.match(/position (\d+)/);
        let position: number | undefined = undefined;

        if (positionMatch && positionMatch[1]) {
          position = parseInt(positionMatch[1], 10) - 1; // Convert to 0-indexed for our UI
        }

        setError(new ValidationError(errorMessage, position));
      } else {
        setError(new ValidationError('Failed to parse the input'));
      }
      setResult(null);
    }
  }

  function handleClear() {
    setInputValue('');
    setResult(null);
    setError(null);
  }

  // Helper function to highlight the error position in the input
  function renderInputWithHighlight() {
    if (!error?.highlightRange && !error?.position) return inputValue;

    let start = 0;
    let end = 0;

    if (error.highlightRange) {
      [start, end] = error.highlightRange;
    } else if (error.position !== undefined) {
      start = error.position;
      end = error.position + 1;
    }

    const prefix = inputValue.substring(0, start);
    const highlighted = inputValue.substring(start, end);
    const suffix = inputValue.substring(end);

    return (
      <>
        {prefix}
        <span className="bg-destructive/20 text-destructive font-bold">
          {highlighted}
        </span>
        {suffix}
      </>
    );
  }

  // Helper function to render a TLV item
  function renderTLVItem(item: TLVItem, index: number) {
    return (
      <div key={index} className="border rounded-md p-3 bg-card">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-primary">Tag:</span>
          <code className="bg-muted px-1 rounded">{item.tag}</code>
          {item.name && (
            <span className="text-muted-foreground">({item.name})</span>
          )}
        </div>

        <div className="flex gap-2 mb-1">
          <div>
            <span className="font-medium">Length:</span> {item.length} (0x
            {item.length.toString(16).padStart(2, '0')})
          </div>
        </div>
        <div className="flex gap-2 mb-1">
          <div>
            <span className="font-medium">Value:</span>{' '}
            <code className="bg-muted p-1 rounded">{item.value}</code>
          </div>
        </div>

        {item.description && (
          <div className="mt-1 text-sm text-muted-foreground">
            {item.description}
          </div>
        )}

        {item.details && item.details.length > 0 && (
          <div className="mt-2 border-t pt-2">
            <div className="font-medium text-sm mb-1">Details:</div>
            <ul className="text-xs space-y-1 list-disc list-inside">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Helper function to render raw TLV data
  function renderRawTLV() {
    if (!result) return null;

    return (
      <pre className="text-xs whitespace-pre-wrap break-words bg-muted p-3 rounded-md overflow-auto max-h-[400px]">
        {result.map((item, index) => (
          <div key={index} className="mb-4">
            <div>
              <span className="font-bold">Tag:</span> {item.tag}
              {item.name ? ` (${item.name})` : ''}
            </div>
            <div>
              <span className="font-bold">Length:</span> {item.length} (0x
              {item.length.toString(16).padStart(2, '0')})
            </div>
            <div>
              <span className="font-bold">Value:</span> {item.value}
            </div>
            {item.description && (
              <div>
                <span className="font-bold">Description:</span>{' '}
                {item.description}
              </div>
            )}
            {item.details && item.details.length > 0 && (
              <div>
                <span className="font-bold">Details:</span>
                <ul className="pl-4">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </pre>
    );
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>EMV TLV Parser</CardTitle>
        <CardDescription>
          Enter a TLV (Type-Length-Value) string to parse. The parser supports
          EMV tag formats and provides detailed information about known tags.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Enter TLV string (e.g., 9F2608123456789012345F)"
              value={inputValue}
              onChange={handleInputChange}
              className={`w-full font-mono ${
                error ? 'border-destructive' : ''
              }`}
            />
            {error && (
              <div className="text-sm text-destructive space-y-1">
                <p>{error.message}</p>
                {(error.position !== undefined || error.highlightRange) && (
                  <div className="font-mono bg-muted/50 p-2 rounded overflow-x-auto">
                    {renderInputWithHighlight()}
                    {error.position !== undefined && (
                      <div>
                        {Array(error.position).fill(' ').join('')}
                        <span className="text-destructive">^</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {result && result.length > 0 && (
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="structured">Structured View</TabsTrigger>
                <TabsTrigger value="raw">Raw Data</TabsTrigger>
              </TabsList>
              <TabsContent value="structured" className="mt-4">
                <div className="space-y-3">
                  {result.map((item, index) => renderTLVItem(item, index))}
                </div>
              </TabsContent>
              <TabsContent value="raw" className="mt-4">
                {renderRawTLV()}
              </TabsContent>
            </Tabs>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleClear} type="button">
          Clear
        </Button>
        <Button onClick={handleSubmit} type="submit">
          Parse
        </Button>
      </CardFooter>
    </Card>
  );
}
