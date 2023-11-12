import { ChangeEvent, ReactElement, memo, useState } from "react"
import { CartItemType } from "../context/CartProvider"
import { ReducerAction } from "../context/CartProvider"
import { ReducerActionType } from "../context/CartProvider"
import { IoMdClose ,IoMdArrowDropdown,IoMdArrowDropup, IoMdAdd} from "react-icons/io";

type PropsType = {
    item: CartItemType;
    dispatch: React.Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href;

    const [count, setCount] = useState(item.qty);

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateCart(newCount);
    };

    const decrementCount = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            updateCart(newCount);
        }
    };

    const updateCart = (newCount: number) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: newCount },
        });
    };

    const lineTotal: number = item.price * count;

    const onRemoveFromCart = () => {
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item,
        });
    };

    const content = (
        <li  className="cart__item">
            <img src={img} alt={item.name} className="cart__img" />
            <div aria-label="Item Name">{item.name}</div>
            <div className="cart__item-subtotal" aria-label="Price Per Item" >
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
            </div>

            <div className="counter">
                <button className="counter__buton1" onClick={incrementCount}><IoMdArrowDropup /></button>
                <div className="counter" aria-label="Item Quantity">{count}</div>
                <button  className="counter__buton2" onClick={decrementCount}> <IoMdArrowDropdown /></button>
            
            </div>

            <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}
            </div>

            <button
                className="product__2"
                aria-label="Remove Item From Cart"
                title="Remove Item From Cart"
                onClick={onRemoveFromCart}
            >
                <IoMdClose />
            </button>
            
        </li>
    );

    return content;
};

export default CartLineItem;