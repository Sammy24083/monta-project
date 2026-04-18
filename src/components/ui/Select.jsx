import React from 'react';
import { cn } from '../../utils/utils';

export const Select = React.forwardRef(({ className, label, options, error, ...props }, ref) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-[13px] font-semibold leading-none text-slate-600 ml-1">{label}</label>}
      <select
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-[14px] ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-monta-blue disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 shadow-sm",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        {...props}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});
Select.displayName = "Select";
