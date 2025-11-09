import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface DropdownMenuContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | null>(null);

const useDropdownMenu = () => {
  const context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('useDropdownMenu must be used within a DropdownMenu');
  }
  return context;
};

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useDropdownMenu();
  return (
    <div onClick={() => setOpen(!open)} className="cursor-pointer">
      {children}
    </div>
  );
};

const DropdownMenuContent = ({
  className,
  children,
  align = 'right',
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
}) => {
  const { open, setOpen } = useDropdownMenu();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-light-primary dark:bg-dark-tertiary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        align === 'right' ? 'right-0' : 'left-0',
        className
      )}
      role="menu"
      aria-orientation="vertical"
      {...props}
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
};

const DropdownMenuItem = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { setOpen } = useDropdownMenu();
  return (
    <div
      className={cn(
        'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer',
        className
      )}
      role="menuitem"
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </div>
  );
};


export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};
