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
                <h1 className="header__title"><SiAffinityphoto/> BenRaw</h1>
                <div className="header__price-box">
                <Nav viewCart={viewCart} setViewCart={setViewCart} />
                   {/*  <p>Productos: {totalItems}</p> */}
                    <p className="header__total">TOTAL: {totalPrice}</p> 
                </div>
            </div>
        </header>
    )

    return content
}
export default Header