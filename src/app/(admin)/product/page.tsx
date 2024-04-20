"use client";
import React, { useState, useReducer } from "react";
import Input from "@components/input";
import Button from "@components//button";
import Searchfilter from "@/components/searchfilter";
import Pagination from "@components/pagination";
import Edit from "@components/edit";
import useFetch from "@/hooks/useFetch";
import { useForm, SubmitHandler } from "react-hook-form";
import { IResult as IFurnitureResult, Furniture } from "@/types/furniture";
import AdminProduct from "@/components/adminproduct";

enum Mode {
  ADD = "add",
  EDIT = "edit",
  DELETE = "delete",
}
interface productState {
  currentProduct: Furniture;
  mode: Mode;
}

interface productAction {
  type: Mode;
  payload: Furniture;
}

const action = (state: productState, action: productAction) => {
  const { type, payload } = action;
  switch (type) {
    case Mode.ADD:
      return { ...state, currentProduct: payload, mode: Mode.ADD };
    case Mode.EDIT:
      return { ...state, currentProduct: payload, mode: Mode.EDIT };
    case Mode.DELETE:
      return { ...state, currentProduct: payload, mode: Mode.DELETE };
    default:
      return state;
  }
};

export default function Page() {
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(action, {
    currentProduct: {} as Furniture,
    mode: Mode.ADD,
  });

  const {
    data: furnitures,
    isLoading,
    error,
  } = useFetch<IFurnitureResult>(
    `http://localhost:5000/api/furnitures/getall?limit=${limit}&offset=${
      limit * offset
    }&search=${search}`
  );

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Furniture>({
    defaultValues: state.currentProduct,
  });

  const onSubmit: SubmitHandler<Furniture> = (data: Furniture) => {
    console.log(data);
  };

  return (
    <section className="grid flex-1 gap-10">
      <div className="grid gap-10 min-w-[500px]">
        <div className="flex flex-wrap justify-between gap-10 ">
          <h1 className="font-bold text-4xl">Product table</h1>
          <Searchfilter />
        </div>
        <div className="shadow-md rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-white uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="p-3">
                  No.
                </th>
                <th scope="col" className="p-3">
                  ID
                </th>
                <th scope="col" className="p-3">
                  English Name
                </th>
                <th scope="col" className="p-3">
                  Thai Name
                </th>
                <th scope="col" className="p-3">
                  Description
                </th>
                <th scope="col" className="p-3">
                  URL
                </th>
                <th scope="col" className="p-3">
                  Brand
                </th>
                <th scope="col" className="p-3">
                  Category
                </th>
                <th scope="col" className="p-3">
                  Price (THB)
                </th>
                <th scope="col" className="p-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={10}>Loading...</td>
                </tr>
              )}
              {furnitures?.data.map((product, idx) => (
                <tr
                  key={product._id}
                  className="bg-white border-b hover:bg-gray-100"
                >
                  <th className="p-3 text-gray-700 text-center">
                    {limit * offset + idx + 1}
                  </th>
                  <td className="p-3 truncate max-w-[100px]">{product._id}</td>
                  <td className="p-3 truncate max-w-[100px]">
                    {product.english_name}
                  </td>
                  <td className="p-3 truncate max-w-[100px]">
                    {product.thai_name}
                  </td>
                  <td className="p-3 truncate max-w-[100px]">
                    {product.description}
                  </td>
                  <td className="p-3 truncate max-w-[100px]">{product.url}</td>
                  <td className="p-3">{product.brand}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="flex items-center justify-center p-6">
                    <Edit
                      onEdit={() =>
                        dispatch({ type: Mode.EDIT, payload: product })
                      }
                      onDelete={() =>
                        dispatch({ type: Mode.DELETE, payload: product })
                      }
                    />
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
              {limit * offset + 1} -{" "}
              {limit * offset + (furnitures?.data.length || 0)}
            </span>
            of
            <span className=" text-blue-400">{furnitures?.total}</span>
          </span>
          <Pagination
            currentPage={offset + 1}
            totalPages={
              (furnitures && Math.ceil(furnitures?.total / limit)) || 1
            }
            onPageChange={(page) => setOffset(page - 1)}
          />
        </div>
        {/**Do like that because it want to kill the children node */}
        <AdminProduct
          data={state.currentProduct}
          mode={state.mode}
          onCanceled={() =>
            dispatch({
              type: Mode.ADD,
              payload: {} as Furniture,
            })
          }
        />
      </div>
    </section>
  );
}

// const [currentPage, setCurrentPage] = useState(1);
// const [currentProduct, setCurrentProduct] = useState({});

// const products = [
//   {
//     id: 1,
//     productName: "Bathtub model B02-A",
//     brand: "Ikea",
//     type: "Bathroom",
//     category: "Bathtub",
//     url: "http:ss//www.01.net.com/",
//     price: 5000,
//   },
//   {
//     id: 2,
//     productName: "Cabinet with lavatory",
//     brand: "Ikea",
//     type: "Bathroom",
//     category: "Lavatory",
//     url: "http:ss//www.02.net.com/",
//     price: 5000,
//   },
//   {
//     id: 3,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 4,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 5,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 6,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 7,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 8,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 9,
//     productName: "Bathtub model B02-A",
//     brand: "Ikea",
//     type: "Bathroom",
//     category: "Bathtub",
//     url: "http:ss//www.01.net.com/",
//     price: 5000,
//   },
//   {
//     id: 10,
//     productName: "Cabinet with lavatory",
//     brand: "Ikea",
//     type: "Bathroom",
//     category: "Lavatory",
//     url: "http:ss//www.02.net.com/",
//     price: 5000,
//   },
//   {
//     id: 11,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 12,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 13,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 14,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 15,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 16,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 17,
//     productName: "Bathtub model B02-A",
//     brand: "Ikea",
//     type: "Bathroom",
//     category: "Bathtub",
//     url: "http:ss//www.01.net.com/",
//     price: 5000,
//   },
//   {
//     id: 18,
//     productName: "Cabinet with lavatory",
//     brand: "Ikea",
//     type: "Bathroom",
//     category: "Lavatory",
//     url: "http:ss//www.02.net.com/",
//     price: 5000,
//   },
//   {
//     id: 19,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 20,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 21,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 22,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 23,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 24,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 25,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 26,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 27,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 28,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 29,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 30,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
//   {
//     id: 31,
//     productName: "Lincoln full base",
//     brand: "Ikea",
//     type: "Bedroom",
//     category: "Sofa",
//     url: "http:ss//www.03.net.com/",
//     price: 5000,
//   },
// ];

// const totalPages = Math.ceil(products.length / productsPerPage); // TotalPages = 2 (number of products / productsPerPage = 31/5 = 7) Math.ceil is rounding up
// const indexOfLastProduct = currentPage * productsPerPage; // indexOfLastProduct = 1 * 5 = 5
// const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // indexOfFirstProduct = 5 - 5 = 0

// const currentProducts = products.slice(
//   indexOfFirstProduct,
//   indexOfLastProduct
// ); // currentProducts = products.slice(0, 5) = [1,2,3,4,5]

/**
 *  <div className="grid gap-10 min-w-[500px] ">
          <h1 className="font-bold text-4xl">
            {`${state.mode} Product`.toUpperCase()}
          </h1>
          <div className="bg-white w-full h-full p-5 shadow-md rounded-md">
            <div className="flex">
              <form className="grid w-full space-y-5">
                <div className="flex gap-10">
                  <img
                    className="h-52 w-52 rounded-md"
                    src="https://images.livspace-cdn.com/w:1024/h:631/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png"
                  ></img>
                  <div className="space-y-8 w-full">
                    <Input
                      form={register("english_name", { required: true })}
                      id={register("english_name").name}
                      name={"English name"}
                      type={"text"}
                      placeholder={""}
                    />
                    <Input
                      form={register("english_name", { required: true })}
                      id={register("english_name").name}
                      name={"Thai name"}
                      type={"text"}
                      placeholder={""}
                    />
                  </div>
                </div>
                <Input
                  form={register("english_name", { required: true })}
                  id={register("english_name").name}
                  name={"Product URL"}
                  type={"text"}
                  placeholder={""}
                />
                <div className="flex flex-wrap gap-10">
                  <div className="flex-1 w-full space-y-5">
                    <Input
                      form={register("english_name", { required: true })}
                      id={register("english_name").name}
                      name={"Description"}
                      type={"text"}
                      placeholder={""}
                    />
                    <Input
                      form={register("english_name", { required: true })}
                      id={register("english_name").name}
                      name={"Price"}
                      type={"number"}
                      placeholder={""}
                    />
                  </div>
                  <div className="flex-1 w-full space-y-5">
                    <Input
                      form={register("english_name", { required: true })}
                      id={register("english_name").name}
                      name={"Brand"}
                      type={"text"}
                      placeholder={""}
                    />
                    <Input
                      form={register("english_name", { required: true })}
                      id={register("english_name").name}
                      name={"Category"}
                      type={"text"}
                      placeholder={""}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  {state.mode !== "add" && (
                    <Button
                      type="button"
                      onClick={() => {
                        dispatch({ type: Mode.ADD, payload: {} as Furniture });
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button type="submit">
                    {`${state.mode} Product`.toUpperCase()}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
 */

/** <AdminProduct
          data={state.currentProduct}
          mode={state.mode}
          onCanceled={() =>
            dispatch({
              type: Mode.ADD,
              payload: {} as Furniture,
            })
          }
        /> */
