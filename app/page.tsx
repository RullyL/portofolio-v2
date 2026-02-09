import React from 'react';
import dynamic from 'next/dynamic';

const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={"animate-pulse bg-slate-100 dark:bg-slate-800 rounded p-4 " + className} />
);

const Hero = dynamic(() => import('../components/sections/Hero'), { loading: () => <Skeleton className="h-40" /> });
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
    </div>
  );
}

