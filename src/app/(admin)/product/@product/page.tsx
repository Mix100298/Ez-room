'use client';
import Button from "@/components/button";
import Input from "@/components/input";


export default function Page() {

    return (
        <div className="grid gap-10 min-w-[500px] ">
               
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
                <Button >Add product</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}