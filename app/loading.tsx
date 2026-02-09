import React from 'react';

export default function Loading(){
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="h-6 w-48 bg-slate-200 dark:bg-slate-700 mx-auto rounded mb-3" />
        <div className="h-4 w-64 bg-slate-200 dark:bg-slate-700 mx-auto rounded" />
      </div>
    </div>
  )
}
