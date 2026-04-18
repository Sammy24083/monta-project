import React from 'react';
import { cn } from '../../utils/utils';
import { Loader2 } from 'lucide-react';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  isLoading, 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monta-blue disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-monta-blue text-white shadow-sm hover:bg-blue-700",
    secondary: "bg-slate-100 text-monta-dark hover:bg-slate-200",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-monta-dark",
    ghost: "hover:bg-slate-50 hover:text-monta-dark text-slate-500",
  };

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-11 rounded-lg px-8 text-base",
    icon: "h-9 w-9",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});
Button.displayName = "Button";
