// Components
import Button from '../ui-elements/Button';
import Link from 'next/link';

// Hooks
import { useContext } from 'react';

// Context
import {AppContext} from '../../common/context/AppContext';

export default function Product(props) {
    const appContext = useContext(AppContext);
    const { details: product } = props;

    const productQuantity = appContext.cart.find(cartProduct => cartProduct.id === product.id)?.quantity;
    const onProductAdd = () => appContext.handleProductAdd(product);
    const onProductDelete = () => appContext.handleProductDelete(product.id);

    return (
        <div className="product">
            <div className="product-image-container">
                <Link href={`products/${product.id}`}>
                    <a><img width="100" height="100" className="product-image" alt={product?.title} src={product?.image}/></a>
                </Link>

                {productQuantity && 
                    <div className="product-quantity-container">
                        <div className="product-quantity">{productQuantity}</div>
                    </div>
                }
            </div>

            <div className="product-info">
                <h4 className="product-info-name">{product?.title}</h4>
                <p className="product-info-rating">{product?.rating?.rate.toFixed(2)}</p>
                <p className="product-info-category">{product?.category}</p>
                <p className="product-info-description">{product.description}</p>
            </div>

            <div className="product-checkout">
                <div>
                    {productQuantity && <Button title="Remove from cart" outline className="product-delete" onClick={onProductDelete}>x</Button>}
                </div>

                <Button outline onClick={onProductAdd}>${product?.price.toFixed(2)}</Button>
            </div>
        </div>
    );
}
