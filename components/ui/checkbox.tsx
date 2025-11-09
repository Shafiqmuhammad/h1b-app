import React from 'react';
import { cn } from '../../lib/utils';

const Checkbox = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { checked: boolean | 'indeterminate' }
>(({ className, checked, ...props }, ref) => (
  <button
    ref={ref}
    role="checkbox"
    // Fix: Correctly map the `checked` prop state to the `aria-checked` attribute.
    aria-checked={checked === 'indeterminate' ? 'mixed' : checked}
    data-state={checked === 'indeterminate' ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-gray-400 dark:border-gray-600 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coke-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-coke-red data-[state=checked]:text-white',
      'data-[state=indeterminate]:bg-coke-red data-[state=indeterminate]:text-white',
      className
    )}
    {...props}
  >
    <div className="h-full w-full flex items-center justify-center">
      {checked === 'indeterminate' && <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3"><path d="M4 8h8v1H4z"></path></svg>}
      {checked === true && <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"></path></svg>}
    </div>
  </button>
));
Checkbox.displayName = 'Checkbox';

export { Checkbox };