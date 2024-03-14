"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Searchfilter from "@/app/components/searchfilter";
import Pagination from "../components/pagination";
import Edit from "../components/edit";

const productsPerPage = 5;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = [
    {
      id: 1,
      productName: "Bathtub model B02-A",
      brand: "Ikea",
      type: "Bathroom",
      category: "Bathtub",
      url: "http:ss//www.01.net.com/",
      price: 5000,
    },
    {
      id: 2,
      productName: "Cabinet with lavatory",
      brand: "Ikea",
      type: "Bathroom",
      category: "Lavatory",
      url: "http:ss//www.02.net.com/",
      price: 5000,
    },
    {
      id: 3,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 4,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 5,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 6,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 7,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 8,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 9,
      productName: "Bathtub model B02-A",
      brand: "Ikea",
      type: "Bathroom",
      category: "Bathtub",
      url: "http:ss//www.01.net.com/",
      price: 5000,
    },
    {
      id: 10,
      productName: "Cabinet with lavatory",
      brand: "Ikea",
      type: "Bathroom",
      category: "Lavatory",
      url: "http:ss//www.02.net.com/",
      price: 5000,
    },
    {
      id: 11,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 12,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 13,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 14,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 15,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 16,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 17,
      productName: "Bathtub model B02-A",
      brand: "Ikea",
      type: "Bathroom",
      category: "Bathtub",
      url: "http:ss//www.01.net.com/",
      price: 5000,
    },
    {
      id: 18,
      productName: "Cabinet with lavatory",
      brand: "Ikea",
      type: "Bathroom",
      category: "Lavatory",
      url: "http:ss//www.02.net.com/",
      price: 5000,
    },
    {
      id: 19,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 20,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 21,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 22,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 23,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 24,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 25,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 26,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 27,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 28,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 29,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 30,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
    {
      id: 31,
      productName: "Lincoln full base",
      brand: "Ikea",
      type: "Bedroom",
      category: "Sofa",
      url: "http:ss//www.03.net.com/",
      price: 5000,
    },
  ];
  const totalPages = Math.ceil(products.length / productsPerPage); // TotalPages = 2 (number of products / productsPerPage = 31/5 = 7) Math.ceil is rounding up
  const indexOfLastProduct = currentPage * productsPerPage; // indexOfLastProduct = 1 * 5 = 5
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // indexOfFirstProduct = 5 - 5 = 0

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); // currentProducts = products.slice(0, 5) = [1,2,3,4,5]

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [Select, setSelect] = useState(true);

  return (
    <div className="flex-col mx-auto max-w-screen-xl px-[150px] text-gray-700">
      <div className="grid gap-10 lg:py-10">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div className="flex gap-10">
          <div className="w-[200px]">
            <button
              className={`${
                Select
                  ? "bg-blue-400 hover:bg-blue-500 text-white rounded-md font-bold h-[100px] w-full"
                  : "bg-white hover:bg-blue-500 text-black hover:text-white rounded-md font-bold h-[100px] w-full"
              }`}
              onClick={() => setSelect(true)}
            >
              Dashboard
            </button>
            <button
              className={`${
                Select
                  ? "bg-white hover:bg-blue-500 text-black hover:text-white rounded-md font-bold h-[100px] w-full mt-10"
                  : "bg-blue-400 hover:bg-blue-500 text-white rounded-md font-bold h-[100px] w-full mt-10"
              }`}
              onClick={() => setSelect(false)}
            >
              Add product
            </button>
          </div>
          {Select ? (
            /* Select Dshboard */
            <div className="grid flex-1 gap-10">
              <div className="bg-white w-full h-[300px] truncate"></div>
              <div className="bg-white w-full h-[200px]"></div>
              <div className="bg-white w-full h-[200px]"></div>
            </div>
          ) : (
            /* Select Add product */
            <div className="grid flex-1 gap-10">
              <div className="flex flex-wrap justify-between gap-10">
                <h1 className="font-bold text-4xl">Product table</h1>
                <Searchfilter />
              </div>
              <div className="grid gap-10 min-w-[500px] ">
                <div className="overflow-x-auto shadow-md rounded-md">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-gray-700 ">
                      <tr>
                        <th scope="col" className="p-3">
                          No.
                        </th>
                        <th scope="col" className="p-3">
                          Product name
                        </th>
                        <th scope="col" className="p-3">
                          Brand
                        </th>
                        <th scope="col" className="p-3">
                          Type
                        </th>
                        <th scope="col" className="p-3">
                          Category
                        </th>
                        <th scope="col" className="p-3">
                          URL
                        </th>
                        <th scope="col" className="p-3">
                          Price
                        </th>
                        <th scope="col" className="p-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="bg-white border-b hover:bg-gray-100"
                        >
                          <th className="p-3 text-gray-700 text-center">
                            {product.id}
                          </th>
                          <td className="p-3">{product.productName}</td>
                          <td className="p-3">{product.brand}</td>
                          <td className="p-3">{product.type}</td>
                          <td className="p-3">{product.category}</td>
                          <td className="p-3 truncate max-w-[200px]">
                            {product.url}
                          </td>
                          <td className="p-3">{product.price}</td>
                          <td className="flex items-center justify-center p-6">
                            <Edit />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center flex-wrap justify-between pt-4">
                  <span className="text-sm font-bold text-gray-700 mb-4 inline w-auto space-x-1">
                    Showing
                    <span className=" text-blue-400 mr-1 ml-1">
                      1-{currentProducts.length}
                    </span>
                    of
                    <span className=" text-blue-400">{products.length}</span>
                  </span>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
                <h1 className="font-bold text-4xl">Add Product</h1>
                <div className="bg-white w-full h-full p-5 shadow-md rounded-md">
                  <div className="flex">
                    <form className="grid w-full space-y-5" action="#">
                      <div className="flex gap-10">
                        <img
                          className="h-52 w-52 rounded-md"
                          src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
                        ></img>
                        <div className="space-y-8 w-full">
                          <Input
                            id={"name-product-eng"}
                            name={"English name"}
                            type={"text"}
                            placeholder={""}
                          />
                          <Input
                            id={"name-product-thai"}
                            name={"Thai name"}
                            type={"text"}
                            placeholder={""}
                          />
                        </div>
                      </div>
                      <Input
                        id={"url-product"}
                        name={"Product URL"}
                        type={"text"}
                        placeholder={""}
                      />
                      <div className="flex flex-wrap gap-10">
                        <div className="flex-1 w-full space-y-5">
                          <Input
                            id={"seller-product"}
                            name={"Seller"}
                            type={"text"}
                            placeholder={""}
                          />
                          <Input
                            id={"price-product"}
                            name={"Price"}
                            type={"text"}
                            placeholder={""}
                          />
                        </div>
                        <div className="flex-1 w-full space-y-5">
                          <Input
                            id={"brand-product"}
                            name={"Brand"}
                            type={"text"}
                            placeholder={""}
                            children={""}
                          />
                          <Input
                            id={"category-product"}
                            name={"Category"}
                            type={"text"}
                            placeholder={""}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Button children={"Add product"} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
