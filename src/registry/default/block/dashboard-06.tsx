import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/registry/default/ui/badge';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/registry/default/ui/breadcrumb';
import { Button } from '@/registry/default/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/default/ui/card';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/registry/default/ui/dropdown-menu';
import { Input } from '@/registry/default/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/registry/default/ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/default/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/default/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/default/ui/tooltip';

import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2
} from 'lucide-react';

export const description =
    'An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.';

export const iframeHeight = '938px';

export const containerClassName = 'w-full h-full';

export default function Dashboard() {
    return (
        <div className='bg-muted/40 flex min-h-screen w-full flex-col'>
            <aside className='bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex'>
                <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
                    <Link
                        href='#'
                        className='bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:size-8 md:text-base'>
                        <Package2 className='size-4 transition-all group-hover:scale-110' />
                        <span className='sr-only'>Acme Inc</span>
                    </Link>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8'>
                                <Home className='size-5' />
                                <span className='sr-only'>Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Dashboard</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href='#'
                                className='bg-accent text-accent-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8'>
                                <ShoppingCart className='size-5' />
                                <span className='sr-only'>Orders</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Orders</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8'>
                                <Package className='size-5' />
                                <span className='sr-only'>Products</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Products</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8'>
                                <Users2 className='size-5' />
                                <span className='sr-only'>Customers</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Customers</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8'>
                                <LineChart className='size-5' />
                                <span className='sr-only'>Analytics</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Analytics</TooltipContent>
                    </Tooltip>
                </nav>
                <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href='#'
                                className='text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8'>
                                <Settings className='size-5' />
                                <span className='sr-only'>Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
            <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                <header className='bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size='icon' variant='outline' className='sm:hidden'>
                                <PanelLeft className='size-5' />
                                <span className='sr-only'>Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left' className='sm:max-w-xs'>
                            <nav className='grid gap-6 text-lg font-medium'>
                                <Link
                                    href='#'
                                    className='bg-primary text-primary-foreground group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base'>
                                    <Package2 className='size-5 transition-all group-hover:scale-110' />
                                    <span className='sr-only'>Acme Inc</span>
                                </Link>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5'>
                                    <Home className='size-5' />
                                    Dashboard
                                </Link>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5'>
                                    <ShoppingCart className='size-5' />
                                    Orders
                                </Link>
                                <Link href='#' className='text-foreground flex items-center gap-4 px-2.5'>
                                    <Package className='size-5' />
                                    Products
                                </Link>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5'>
                                    <Users2 className='size-5' />
                                    Customers
                                </Link>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5'>
                                    <LineChart className='size-5' />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className='hidden md:flex'>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='#'>Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href='#'>Products</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Products</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className='relative ml-auto flex-1 md:grow-0'>
                        <Search className='text-muted-foreground absolute left-2.5 top-2.5 size-4' />
                        <Input
                            type='search'
                            placeholder='Search...'
                            className='bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]'
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline' size='icon' className='overflow-hidden rounded-full'>
                                <Image
                                    src='https://ui.shadcn.com/placeholder-user.jpg'
                                    width={36}
                                    height={36}
                                    alt='Avatar'
                                    className='overflow-hidden rounded-full'
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                    <Tabs defaultValue='all'>
                        <div className='flex items-center'>
                            <TabsList>
                                <TabsTrigger value='all'>All</TabsTrigger>
                                <TabsTrigger value='active'>Active</TabsTrigger>
                                <TabsTrigger value='draft'>Draft</TabsTrigger>
                                <TabsTrigger value='archived' className='hidden sm:flex'>
                                    Archived
                                </TabsTrigger>
                            </TabsList>
                            <div className='ml-auto flex items-center gap-2'>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant='outline' size='sm' className='h-8 gap-1'>
                                            <ListFilter className='size-3.5' />
                                            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end'>
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button size='sm' variant='outline' className='h-8 gap-1'>
                                    <File className='size-3.5' />
                                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Export</span>
                                </Button>
                                <Button size='sm' className='h-8 gap-1'>
                                    <PlusCircle className='size-3.5' />
                                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value='all'>
                            <Card x-chunk='A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.'>
                                <CardHeader>
                                    <CardTitle>Products</CardTitle>
                                    <CardDescription>
                                        Manage your products and view their sales performance.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className='hidden w-[100px] sm:table-cell'>
                                                    <span className='sr-only'>Image</span>
                                                </TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className='hidden md:table-cell'>Price</TableHead>
                                                <TableHead className='hidden md:table-cell'>Total Sales</TableHead>
                                                <TableHead className='hidden md:table-cell'>Created at</TableHead>
                                                <TableHead>
                                                    <span className='sr-only'>Actions</span>
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className='hidden sm:table-cell'>
                                                    <Image
                                                        alt='Product image'
                                                        className='aspect-square rounded-md object-cover'
                                                        height='64'
                                                        src='https://ui.shadcn.com/placeholder.svg'
                                                        width='64'
                                                    />
                                                </TableCell>
                                                <TableCell className='font-medium'>Laser Lemonade Machine</TableCell>
                                                <TableCell>
                                                    <Badge variant='outline'>Draft</Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>$499.99</TableCell>
                                                <TableCell className='hidden md:table-cell'>25</TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    2023-07-12 10:42 AM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup='true' size='icon' variant='ghost'>
                                                                <MoreHorizontal className='size-4' />
                                                                <span className='sr-only'>Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className='hidden sm:table-cell'>
                                                    <Image
                                                        alt='Product image'
                                                        className='aspect-square rounded-md object-cover'
                                                        height='64'
                                                        src='https://ui.shadcn.com/placeholder.svg'
                                                        width='64'
                                                    />
                                                </TableCell>
                                                <TableCell className='font-medium'>Hypernova Headphones</TableCell>
                                                <TableCell>
                                                    <Badge variant='outline'>Active</Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>$129.99</TableCell>
                                                <TableCell className='hidden md:table-cell'>100</TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    2023-10-18 03:21 PM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup='true' size='icon' variant='ghost'>
                                                                <MoreHorizontal className='size-4' />
                                                                <span className='sr-only'>Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className='hidden sm:table-cell'>
                                                    <Image
                                                        alt='Product image'
                                                        className='aspect-square rounded-md object-cover'
                                                        height='64'
                                                        src='https://ui.shadcn.com/placeholder.svg'
                                                        width='64'
                                                    />
                                                </TableCell>
                                                <TableCell className='font-medium'>AeroGlow Desk Lamp</TableCell>
                                                <TableCell>
                                                    <Badge variant='outline'>Active</Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>$39.99</TableCell>
                                                <TableCell className='hidden md:table-cell'>50</TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    2023-11-29 08:15 AM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup='true' size='icon' variant='ghost'>
                                                                <MoreHorizontal className='size-4' />
                                                                <span className='sr-only'>Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className='hidden sm:table-cell'>
                                                    <Image
                                                        alt='Product image'
                                                        className='aspect-square rounded-md object-cover'
                                                        height='64'
                                                        src='https://ui.shadcn.com/placeholder.svg'
                                                        width='64'
                                                    />
                                                </TableCell>
                                                <TableCell className='font-medium'>TechTonic Energy Drink</TableCell>
                                                <TableCell>
                                                    <Badge variant='secondary'>Draft</Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>$2.99</TableCell>
                                                <TableCell className='hidden md:table-cell'>0</TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    2023-12-25 11:59 PM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup='true' size='icon' variant='ghost'>
                                                                <MoreHorizontal className='size-4' />
                                                                <span className='sr-only'>Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className='hidden sm:table-cell'>
                                                    <Image
                                                        alt='Product image'
                                                        className='aspect-square rounded-md object-cover'
                                                        height='64'
                                                        src='https://ui.shadcn.com/placeholder.svg'
                                                        width='64'
                                                    />
                                                </TableCell>
                                                <TableCell className='font-medium'>Gamer Gear Pro Controller</TableCell>
                                                <TableCell>
                                                    <Badge variant='outline'>Active</Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>$59.99</TableCell>
                                                <TableCell className='hidden md:table-cell'>75</TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    2024-01-01 12:00 AM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup='true' size='icon' variant='ghost'>
                                                                <MoreHorizontal className='size-4' />
                                                                <span className='sr-only'>Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className='hidden sm:table-cell'>
                                                    <Image
                                                        alt='Product image'
                                                        className='aspect-square rounded-md object-cover'
                                                        height='64'
                                                        src='https://ui.shadcn.com/placeholder.svg'
                                                        width='64'
                                                    />
                                                </TableCell>
                                                <TableCell className='font-medium'>Luminous VR Headset</TableCell>
                                                <TableCell>
                                                    <Badge variant='outline'>Active</Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>$199.99</TableCell>
                                                <TableCell className='hidden md:table-cell'>30</TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    2024-02-14 02:14 PM
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup='true' size='icon' variant='ghost'>
                                                                <MoreHorizontal className='size-4' />
                                                                <span className='sr-only'>Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className='text-muted-foreground text-xs'>
                                        Showing <strong>1-10</strong> of <strong>32</strong> products
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}