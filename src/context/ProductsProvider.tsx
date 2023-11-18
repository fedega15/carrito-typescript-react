import { createContext, ReactElement, useState, useEffect } from "react"
import data from '../../data/products.json';
export type ProductType = {
    sku: string,
    name: string,
    price: number,
}
const initState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
const initialProducts = storedProducts.length ? storedProducts : data.products;

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initialProducts);
    //descomentando este useeffect, puedes correr el json server y usar el fetch
    //npx json-server -w data/products.json -p 3500 
     useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
           const data = await fetch('http://localhost:3500/products').then(res => {
               return res.json()
           }).catch(err => {
               if (err instanceof Error) console.log(err.message)
           })
           return data
       }

       fetchProducts().then(products => setProducts(products))
}, []) 
// o bien usar local storage sin comentar.
  /*    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]); */
 
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext 