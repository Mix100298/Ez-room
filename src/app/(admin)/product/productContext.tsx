import React,{ createContext, useContext, useState } from 'react';


interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    url: string;
}

const ProductContextProvider = createContext    ({} as any);

export function ProductContext({children} : {children : React.ReactNode}) {
    const [currentProduct, setCurrentProduct] = useState({});

    return (
        <ProductContextProvider.Provider value={{

        }}>
            {children}
        </ProductContextProvider.Provider>
    )
    
}

export function useProduct() {
    return useContext(ProductContextProvider);

}