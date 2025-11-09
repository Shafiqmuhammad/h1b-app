import React, { useState, useRef, createContext, useContext } from 'react';
import { cn } from '../../lib/utils';

interface TooltipContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
        {children}
    </TooltipContext.Provider>
  );
};


export const Tooltip = ({ children }: { children: React.ReactNode }) => {
    return <div className="relative inline-block">{children}</div>;
};

export const TooltipTrigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useTooltip();
  
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);
  const handleFocus = () => setOpen(true);
  const handleBlur = () => setOpen(false);

  // FIX: Replaced React.cloneElement with a wrapper element for robustness.
  // This avoids potential TypeScript errors and works with any child element.
  // The wrapper is an inline-block to correctly position itself around the child.
  return (
    <div
      className="inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </div>
  );
};

export const TooltipContent = ({ className, children, side = 'top', sideOffset = 4, ...props }: React.HTMLAttributes<HTMLDivElement> & { side?: 'top' | 'right' | 'bottom' | 'left', sideOffset?: number }) => {
  const { open } = useTooltip();

  if (!open) return null;

  const positionClasses = {
      top: 'bottom-full mb-1',
      bottom: 'top-full mt-1',
      left: 'right-full mr-1',
      right: 'left-full ml-1',
  };

  const getTransformOrigin = () => {
    switch (side) {
      case 'top': return 'origin-bottom';
      case 'bottom': return 'origin-top';
      case 'left': return 'origin-right';
      case 'right': return 'origin-left';
      default: return 'origin-center';
    }
  }

  return (
    <div
      className={cn(
        'absolute z-50 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm dark:bg-gray-700',
        'animate-in fade-in-0 zoom-in-95',
        getTransformOrigin(),
        positionClasses[side],
        className
      )}
      style={{
        [side === 'top' ? 'marginBottom' : 'marginTop']: `${sideOffset}px`,
        [side === 'left' ? 'marginRight' : 'marginLeft']: `${sideOffset}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};