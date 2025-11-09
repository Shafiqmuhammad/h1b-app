import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Button } from './button';

const AlertDialog = Dialog;
const AlertDialogTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>; // Simplified

const AlertDialogContent = ({ children, ...props }: React.ComponentProps<typeof DialogContent>) => (
    <DialogContent {...props}>{children}</DialogContent>
);

const AlertDialogHeader = ({ children, ...props }: React.ComponentProps<typeof DialogHeader>) => (
    <DialogHeader {...props}>{children}</DialogHeader>
);

const AlertDialogTitle = ({ children, ...props }: React.ComponentProps<typeof DialogTitle>) => (
    <DialogTitle {...props}>{children}</DialogTitle>
);

const AlertDialogDescription = ({ children, ...props }: React.ComponentProps<typeof DialogDescription>) => (
    <DialogDescription {...props}>{children}</DialogDescription>
);

const AlertDialogFooter = ({ children, ...props }: React.ComponentProps<typeof DialogFooter>) => (
    <DialogFooter {...props}>{children}</DialogFooter>
);

const AlertDialogAction = ({ children, ...props }: React.ComponentProps<typeof Button>) => (
    <Button {...props}>{children}</Button>
);

const AlertDialogCancel = ({ children, ...props }: React.ComponentProps<typeof Button>) => (
    <Button variant="outline" {...props}>{children}</Button>
);

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
