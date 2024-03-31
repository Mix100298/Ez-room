import React from 'react';

export default function Layout({ monitor,analytics } : { monitor: React.ReactNode, analytics: React.ReactNode}) {
  return (
    <div className="flex-1 gap-10">
    {monitor}
    {analytics}
    </div>
  )
}