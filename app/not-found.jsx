"use client"
import { buttonVariants } from '@/components/ui/button';
import { useRive } from '@rive-app/react-canvas';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const NotFound = () => {
  const router =useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
    router.push("/")
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);
  const { rive, RiveComponent } = useRive({
    src: '/not-found.riv',
    autoplay: true,
  });
  return (
    <div className="flex flex-col ab items-center w-screen h-screen justify-center pt-6">
     <RiveComponent/>
   
     <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg" })} >
      Go to Home
     </Link>
    </div>
  );
};

export default NotFound;
