import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { IoMdArrowRoundBack } from "react-icons/io"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {

    const button = viewCart
        ? <button className="product__" onClick={() => setViewCart(false)}><IoMdArrowRoundBack className="icon" /></button>
        : <button className="product__" onClick={() => setViewCart(true)}><PiShoppingCartSimpleBold className="icon" /></button>

    const content = (
        <nav className="nav">
            {button}
        </nav>
    )

    return content
}
export default Nav