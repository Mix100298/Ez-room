import React from "react";

export default function Layout({
  monitor,
  analytics,
  engagement,
}: {
  monitor: React.ReactNode;
  analytics: React.ReactNode;
  engagement: React.ReactNode;
}) {
  return (
    <div className="flex-row gap-10">
      {monitor}
      {analytics}
      {engagement}
    </div>
  );
}
