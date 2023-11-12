import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false)
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()
    
    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }
    const pageContent = confirm
        ? <h2>¡GRACIAS POR COMPRAR! Un asesor te contactara a continuacion!</h2>
        
        : <>
        
            <ul  className="cart">
            {cart.map(item => {
                    return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    )
                })}
            </ul>
            <div className="cart__totals">
                <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
                    Comprar{/*  {totalPrice} */}
                </button>
            </div>
        </>

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    )

    return content
}
export default Cart