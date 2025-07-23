import { Circle } from 'lucide-react';

export function StepIcon({ number }: { number: number }) {
  return (
    <div className="relative w-8 h-8">
      <Circle className="w-8 h-8 text-primary" />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black">
        {number}
      </span>
    </div>
  );
}
