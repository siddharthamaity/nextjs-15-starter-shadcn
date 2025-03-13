'use client';

import * as React from 'react';

import { WhatsApp } from '@/components/Icon/IconWhatsApp';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { countries } from '@/lib/phone-codes';
import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

interface Country {
    name: string;
    flag: string;
    code: string;
    dial_code: string;
}

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: any;
    name: string;
    label?: string;
    onCountryChange?: (countryCode: string) => void;
    showWhatsAppIcon?: boolean;
}

export function PhoneInput({
    control,
    name,
    label,
    className,
    onCountryChange,
    showWhatsAppIcon,
    ...props
}: PhoneInputProps) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');

    // Get US as default or fallback to first country
    const defaultCountry = React.useMemo(() => {
        const country = countries.find((c) => c.code === 'US') || countries[0];

        return country;
    }, []);

    const [selectedCountry, setSelectedCountry] = React.useState<Country>(defaultCountry);
    const [localPhoneNumber, setLocalPhoneNumber] = React.useState('');

    // Sort and filter countries
    const filteredCountries = React.useMemo(() => {
        const usCountry = countries.find((c) => c.code === 'US');
        const otherCountries = countries.filter((c) => c.code !== 'US').sort((a, b) => a.name.localeCompare(b.name));

        const allCountries = usCountry ? [usCountry, ...otherCountries] : otherCountries;

        if (!search) return allCountries;

        const result = allCountries.filter((country) =>
            `${country.name} ${country.code} ${country.dial_code}`.toLowerCase().includes(search.toLowerCase())
        );

        return result;
    }, [search]);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => {
                const handlePaste = React.useCallback(
                    (e: React.ClipboardEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        const pastedText = e.clipboardData.getData('text');

                        if (pastedText.startsWith('+')) {
                            const matchingCountry = countries
                                .filter((country) => pastedText.startsWith(country.dial_code))
                                .sort((a, b) => b.dial_code.length - a.dial_code.length)[0];

                            if (matchingCountry) {
                                setSelectedCountry(matchingCountry);
                                const numberWithoutCode = pastedText.slice(matchingCountry.dial_code.length);
                                const cleanNumber = numberWithoutCode.replace(/[^\d\s()-]/g, '');
                                setLocalPhoneNumber(cleanNumber);
                                const countryCode = matchingCountry.dial_code.replace('+', '');
                                field.onChange(`${countryCode}${cleanNumber}`);

                                return;
                            }
                        }

                        const cleanNumber = pastedText.replace(/[^\d\s()-]/g, '');
                        setLocalPhoneNumber(cleanNumber);
                        const countryCode = selectedCountry.dial_code.replace('+', '');
                        field.onChange(`${countryCode}${cleanNumber}`);
                    },
                    [selectedCountry]
                );

                const handleCountryChange = (country: Country) => {
                    setSelectedCountry(country);
                    setOpen(false);
                    onCountryChange?.(country.code);
                    const countryCode = country.dial_code.replace('+', '');
                    field.onChange(`${countryCode}${localPhoneNumber}`);
                };

                return (
                    <FormItem className='flex flex-col gap-2'>
                        {label && <FormLabel>{label}</FormLabel>}
                        <div className='relative flex gap-0'>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant='outline'
                                        role='combobox'
                                        aria-expanded={open}
                                        className='h-12 w-fit justify-between rounded-r-none'>
                                        <div className='flex items-center gap-1 md:gap-2'>
                                            <span className='hidden text-base md:block'>{selectedCountry.flag}</span>
                                            <span className='text-sm'>{selectedCountry.code}</span>
                                            <span className='text-muted-foreground text-xs'>
                                                {selectedCountry.dial_code}
                                            </span>
                                        </div>
                                        <CaretSortIcon className='ml-0 h-4 w-4 shrink-0 opacity-50 md:ml-2' />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='font-figtree w-[300px] p-0' align='start'>
                                    <Command className='font-figtree'>
                                        <CommandInput
                                            placeholder='Search country...'
                                            value={search}
                                            onValueChange={setSearch}
                                            className='font-figtree'
                                        />
                                        <CommandList>
                                            <CommandEmpty>No country found.</CommandEmpty>
                                            <CommandGroup className='max-h-[120px] overflow-y-auto'>
                                                {filteredCountries.map((country) => (
                                                    <CommandItem
                                                        key={country.code}
                                                        value={country.code}
                                                        onSelect={() => handleCountryChange(country)}>
                                                        <div className='flex w-full items-center gap-2'>
                                                            <span className='text-base'>{country.flag}</span>
                                                            <span className='text-sm'>{country.name}</span>
                                                            <span className='text-muted-foreground text-sm'>
                                                                {country.dial_code}
                                                            </span>
                                                        </div>
                                                        <CheckIcon
                                                            className={cn(
                                                                'ml-auto h-4 w-4',
                                                                selectedCountry.code === country.code
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0'
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            {showWhatsAppIcon && (
                                <WhatsApp className='absolute top-1/2 right-4 size-5 -translate-y-1/2 opacity-20' />
                            )}
                            <FormControl>
                                <Input
                                    {...props}
                                    type='tel'
                                    className={cn('flex-1', className)}
                                    value={localPhoneNumber}
                                    onPaste={handlePaste}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^\d\s()-]/g, '');
                                        setLocalPhoneNumber(value);
                                        const countryCode = selectedCountry.dial_code.replace('+', '');
                                        field.onChange(`${countryCode}${value}`);
                                    }}
                                />
                            </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}
