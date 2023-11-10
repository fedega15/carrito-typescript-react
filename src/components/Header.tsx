import Nav from "./Nav"
import useCart from "../hooks/useCart"
import { SiAffinityphoto } from "react-icons/si"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <h1><SiAffinityphoto/> BenRaw</h1>
                <div className="header__price-box">
                    <p>Productos: {totalItems}</p>
                    <p>Precio TOTAL: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )

    return content
}
export default Header