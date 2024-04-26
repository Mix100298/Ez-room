import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AdminNavbar from "@/components/adminnav";

export default function Layout({
  children,
}: {
  dashboard: React.ReactNode;
  children: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700 min-h-screen">
        <div className="grid grid-cols-12 grid-flow-row gap-10 py-10">
          <h1 className="text-6xl font-bold col-span-10">Admin</h1>
          <div className="col-span-3">
            <AdminNavbar />
          </div>
          <section className="col-span-9 ">{children}</section>
        </div>
      </main>
      <Footer />
    </>
  );
}
