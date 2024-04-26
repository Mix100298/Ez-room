"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNavbar() {
  const pathname = usePathname();

  return (
    <nav className="min-w-[120px]">
      <h1 className="font-bold text-3xl">Menu</h1>
      <div className="">
        <Link
          href="/dashboard"
          className={`inline-flex items-center justify-center ${
            pathname === "/dashboard" ? "bg-blue-500 text-white" : "bg-white"
          } hover:bg-blue-500 text-black hover:text-white rounded-md font-bold h-[100px] w-full mt-10`}
        >
          Dashboard
        </Link>
        <Link
          href="/product"
          className={`inline-flex items-center justify-center ${
            pathname === "/product" ? "bg-blue-500 text-white" : "bg-white"
          } hover:bg-blue-500 text-black hover:text-white rounded-md font-bold h-[100px] w-full mt-10`}
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
}
