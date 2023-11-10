import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"
import { PiShoppingCartSimpleBold  } from "react-icons/pi"
import useCart from "../hooks/useCart"
import { MdAddShoppingCart } from "react-icons/md"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
    const {  totalItems } = useCart()
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? ` → Carrito TOTAL:  ${totalItems}` : null

    const content =
        <article className="product">
            
            <img src={img} alt={product.name} className="product__img" />
            <h3 className="product__title">{product.name}</h3>
            <p className="product__title">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
            <button className="product__button"  onClick={onAddToCart}><MdAddShoppingCart className="icon" />Add to cart </button>
        </article>

    return content
}

function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct