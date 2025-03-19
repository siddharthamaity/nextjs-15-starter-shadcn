'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { countries } from '@/lib/phone-codes';
import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { Control, Path, PathValue } from 'react-hook-form';

interface Country {
    name: string;
    flag: string;
    code: string;
    dial_code: string;
}

interface CitizenshipSelectorProps<T extends Record<string, any>> extends React.HTMLAttributes<HTMLDivElement> {
    control: Control<T>;
    name: Path<T>;
    label?: string | React.ReactNode;
    defaultCountry?: string | null;
}

export function CitizenshipSelector<T extends Record<string, any>>({
    control,
    name,
    label,
    defaultCountry = 'US',
    className
}: CitizenshipSelectorProps<T>) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');

    // Modified useEffect to handle default value better
    React.useEffect(() => {
        const field = control._fields[name] as { value?: string };
        const formValue = control._formValues[name];

        // Only set default if no value exists
        if (!field?.value && !formValue && defaultCountry) {
            const usCountry = countries.find((c) => c.code === defaultCountry);
            if (usCountry) {
                control._formValues[name] = usCountry.code;
                control._updateFieldArray(name);
            }
        }
    }, [control, name, defaultCountry]);

    // Filter countries with US first
    const filteredCountries = React.useMemo(() => {
        const usCountry = countries.find((c) => c.code === 'US');
        const otherCountries = countries.filter((c) => c.code !== 'US').sort((a, b) => a.name.localeCompare(b.name));

        const allCountries = usCountry ? [usCountry, ...otherCountries] : otherCountries;

        if (!search) return allCountries;

        return allCountries.filter((country) =>
            `${country.name} ${country.code}`.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <FormField
            control={control}
            name={name}
            defaultValue={'US' as PathValue<T, Path<T>>}
            render={({ field }) => {
                // Get selected country info for display
                const selectedCountry = React.useMemo(() => {
                    if (!field.value) return countries.find((c) => c.code === 'US');

                    return countries.find((c) => c.code === field.value);
                }, [field.value]);

                return (
                    <FormItem className={cn('flex flex-col gap-2', className)}>
                        {label && <FormLabel>{label}</FormLabel>}
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant='outline'
                                        role='combobox'
                                        aria-expanded={open}
                                        className={cn(
                                            'h-12 w-full justify-between',
                                            !field.value && 'text-muted-foreground'
                                        )}>
                                        {selectedCountry ? (
                                            <span className='flex items-center gap-2'>
                                                <span className='text-base'>{selectedCountry.flag}</span>
                                                <span>{selectedCountry.name}</span>
                                            </span>
                                        ) : (
                                            'Select your citizenship'
                                        )}
                                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className='w-full max-w-[300px] p-0 drop-shadow-md' align='start'>
                                <Command>
                                    <CommandInput
                                        placeholder='Search country...'
                                        value={search}
                                        onValueChange={setSearch}
                                        className='h-12'
                                    />
                                    <CommandList className='max-h-[160px] w-full overflow-y-auto'>
                                        <CommandEmpty>No country found.</CommandEmpty>
                                        <CommandGroup>
                                            {filteredCountries.map((country) => (
                                                <CommandItem
                                                    key={country.code}
                                                    value={country.code}
                                                    onSelect={() => {
                                                        field.onChange(country.code);
                                                        setOpen(false);
                                                    }}>
                                                    <span className='flex items-center gap-2'>
                                                        <span className='text-base'>{country.flag}</span>
                                                        <span>{country.name}</span>
                                                    </span>
                                                    <CheckIcon
                                                        className={cn(
                                                            'ml-auto h-4 w-4',
                                                            field.value === country.code ? 'opacity-100' : 'opacity-0'
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}
