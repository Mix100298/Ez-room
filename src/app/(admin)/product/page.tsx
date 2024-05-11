"use client";
import React, { useState, useReducer, ChangeEvent } from "react";
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
    `${process.env.backendUrl}/api/furnitures/getall?limit=${limit}&offset=${
      limit * offset
    }&search=${search}`
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setOffset(0);
  };

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

  const SkeletonTables = () => {
    const cellCount = 9;
    const SkeletonTables = Array.from({ length: cellCount }, (_, index) => (
      <td key={index} className="bg-white h-[72px] p-3">
        <div className="flex bg-gray-200 w-full h-5 rounded-full"></div>
      </td>
    ));

    return <>{SkeletonTables}</>;
  };

  return (
    <section className="grid flex-1 gap-10">
      <div className="grid gap-10 min-w-[500px]">
        <div className="flex flex-wrap justify-between gap-10 ">
          <h1 className="font-bold text-4xl">Product table</h1>
          <Searchfilter search={search} onChange={handleSearch} />
        </div>
        <div className="shadow-md rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-white uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="p-3 w-[20px]">
                  No.
                </th>
                {/* <th scope="col" className="p-3">
                  ID
                </th> */}
                <th scope="col" className="p-3 max-w-[60px]">
                  English Name
                </th>
                <th scope="col" className="p-3 max-w-[60px]">
                  Thai Name
                </th>
                <th scope="col" className="p-3 max-w-[100px]">
                  Description
                </th>
                <th scope="col" className="p-3  max-w-[80px]">
                  URL
                </th>
                <th scope="col" className="p-3  max-w-[60px]">
                  Brand
                </th>
                <th scope="col" className="p-3 max-w-[80px]">
                  Category
                </th>
                <th scope="col" className="p-3 max-w-[60px]">
                  Price (THB)
                </th>
                <th
                  scope="col"
                  className="p-3 truncate max-w-full text-center "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  <tr className="animate-pulse border-b-2 border-gray-300">
                    <SkeletonTables />
                  </tr>
                  <tr className="animate-pulse border-b-2 border-gray-300">
                    <SkeletonTables />
                  </tr>
                  <tr className="animate-pulse border-b-2 border-gray-300">
                    <SkeletonTables />
                  </tr>
                  <tr className="animate-pulse border-b-2 border-gray-300">
                    <SkeletonTables />
                  </tr>
                  <tr className="animate-pulse border-b-2 border-gray-300">
                    <SkeletonTables />
                  </tr>
                </>
              ) : (
                <>
                  {furnitures?.data.map((product, idx) => (
                    <tr
                      key={product._id}
                      className="bg-white border-b hover:bg-gray-100"
                    >
                      <th className="p-3 text-gray-700 text-center w-[20px]">
                        {limit * offset + idx + 1}
                      </th>
                      {/* <td className="p-3 truncate max-w-[110px]">{product._id}</td> */}
                      <td className="p-3 truncate max-w-[60px]">
                        {product.english_name}
                      </td>
                      <td className="p-3 truncate max-w-[60px]">
                        {product.thai_name}
                      </td>
                      <td className="p-3 truncate max-w-[100px]">
                        {product.description}
                      </td>
                      <td className="p-3 truncate max-w-[80px]">
                        {product.url}
                      </td>
                      <td className="p-3 truncate max-w-[60px]">
                        {product.brand}
                      </td>
                      <td className="p-3 truncate max-w-[80px]">
                        {product.category}
                      </td>
                      <td className="p-3 truncate max-w-[60px]">
                        {product.price}
                      </td>
                      <td className="flex items-center justify-center p-6 max-w-full">
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
                </>
              )}
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
