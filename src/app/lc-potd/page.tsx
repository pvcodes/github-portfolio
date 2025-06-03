import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ErrorComponent() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">This time, please do it manually.</h1>
            <Link
                href="https://leetcode.com/problemset/"
                className={cn(buttonVariants({ variant: 'outline' }), 'mt-4')}
            >
                Click here to redirect to LeetCode
            </Link>
        </div>
    );
}