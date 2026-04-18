import React from 'react';
import { cn } from '../../utils/utils';

export const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-[13px] font-semibold leading-none text-slate-600 ml-1">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-[14px] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-monta-blue disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm",
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
