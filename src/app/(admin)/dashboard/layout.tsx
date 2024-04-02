import React from 'react';

export default function Layout({ monitor,analytics } : { monitor: React.ReactNode, analytics: React.ReactNode}) {
  return (
    <div className="flex-row gap-10">
    {monitor}
   {analytics}
    </div>
  )
}