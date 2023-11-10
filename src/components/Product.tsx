import { ProductType } from "../context/ProductsProvider";
import { ReactElement, memo, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

type PropsType = {
    product: ProductType;
};

const Product = ({ product }: PropsType): ReactElement => {
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

    const [addedCount, setAddedCount] = useState(0);

    const onAddToCart = () => {
        const qty = addedCount + 1;
        setAddedCount(qty);
    };

    const itemInCart = addedCount > 0 ? ` → Producto Agregado (${addedCount})` : null;

    const content = (
        <article className="product">
            <img src={img} alt={product.name} className="product__img" />
            <h3 className="product__title">{product.name}</h3>
            <p className="product__title">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
                {itemInCart}
            </p>
            <button className="product__button" onClick={onAddToCart}>
                <MdAddShoppingCart className="icon" /> Add to cart
            </button>
        </article>
    );

    return content;
};

function areProductsEqual(prevProps: PropsType, nextProps: PropsType) {
    return prevProps.product.sku === nextProps.product.sku;
}

const MemoizedProduct = memo(Product, areProductsEqual);

export default MemoizedProduct;
