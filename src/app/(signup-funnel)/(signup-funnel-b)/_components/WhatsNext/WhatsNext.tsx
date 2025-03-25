import React from 'react';

import { Separator } from '@/components/ui/separator';

type WhatsNextProps = {
    componenHeader: string;
    rowsInfo: {
        content: string;
    }[];
};

export function WhatsNext({ componenHeader, rowsInfo }: WhatsNextProps) {
    return (
        <div className='mt-12 flex max-w-md flex-col gap-2 px-6 pb-24'>
            <div className='mb-4 -ml-4 flex items-center justify-center'>
                <h2 className='text-2xl font-bold text-neutral-50'>{componenHeader}</h2>
            </div>
            <div className='mt-4 flex flex-col gap-2'>
                {rowsInfo.map((row, index) => (
                    <React.Fragment key={row.content}>
                        <div className='flex flex-row items-center gap-2 pr-8'>
                            <h2 className='px-8 text-3xl font-bold text-neutral-50'>{index + 1}</h2>
                            <div className='font-bold text-neutral-50'>{row.content}</div>
                        </div>
                        {index !== rowsInfo.length - 1 && <Separator className='w-80% my-12 bg-neutral-50/30' />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
