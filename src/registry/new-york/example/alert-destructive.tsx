import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function AlertDestructive() {
    return (
        <Alert variant='destructive'>
            <ExclamationTriangleIcon className='size-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
    );
}
