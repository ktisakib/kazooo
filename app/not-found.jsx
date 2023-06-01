"use client"
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const NotFound = () => {
  const router =useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
    router.back()
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="flex flex-col gap-10 ab items-center w-screen h-screen justify-center pt-6">
      <h1 className='text-2xl font-semibold'>No Content Found </h1>
      <p>You wiil be redirected Where you came from!</p>
     <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg" })} >
      Go to Home
     </Link>
    </div>
  );
};

export default NotFound;
