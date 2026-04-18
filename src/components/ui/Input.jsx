import React from 'react';
import { cn } from '../../utils/utils';

export const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-2 w-full">
      {label && <label className="text-sm font-medium leading-none text-slate-700">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monta-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});
Input.displayName = "Input";
