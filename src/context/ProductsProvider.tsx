import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

 const initState: ProductType[] = [
   {
            "sku": "page",
            "name": "Widget",
            "price": 9.99
        },
        {
            "sku": "page5",
            "name": "page4",
            "price": 19.99
        },
        {
            "sku": "page3",
            "name": "Deluxe Widget3",
            "price": 29.99
        },
        {
            "sku": "page2",
            "name": "Deluxe Widget1",
            "price": 29.99
        },
        {
            "sku": "page",
            "name": "Deluxe Widget1",
            "price": 29.99
        },
        {
            "sku": "page2",
            "name": "Deluxe Widget",
            "price": 29.99
        }
] 

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    /*  useEffect(() => {
         const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products').then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message)
            })
            return data
        }

        fetchProducts().then(products => setProducts(products))
 }, []) */

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContext 