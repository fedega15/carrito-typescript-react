import Nav from "./Nav"
import { SiAffinityphoto } from "react-icons/si"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <a href="#banner" className="header__title"><SiAffinityphoto/> BenRaw</a>
                <div className="header__price-box">
                <Nav viewCart={viewCart} setViewCart={setViewCart} />
                   {/*  <p>Productos: {totalItems}</p> */}
                    {/* <p className="header__total">TOTAL: {totalPrice}</p>  */}
                </div>
            </div>
        </header>
    )

    return content
}
export default Header