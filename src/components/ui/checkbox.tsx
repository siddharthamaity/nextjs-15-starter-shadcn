'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Check } from 'lucide-react';

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            'peer ring-offset-background size-6 shrink-0 rounded-lg border border-neutral-300 transition-colors',
            'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'hover:border-neutral-600 hover:bg-neutral-200',
            'data-[state=checked]:border-neutral-900 data-[state=checked]:bg-neutral-900',
            className
        )}
        {...props}>
        <CheckboxPrimitive.Indicator
            className={cn(
                'flex items-center justify-center rounded-md bg-neutral-900 font-bold text-neutral-100 transition-all'
            )}>
            <Check className='size-6 transition-all' />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
