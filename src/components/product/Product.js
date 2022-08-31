// Components
import Button from '../ui-elements/Button';
import Link from 'next/link';
import Badge from '../badge/Badge';

// Hooks
import { useContext } from 'react';

// Context
import {AppContext} from '../../common/context/AppContext';

export default function Product(props) {
    const appContext = useContext(AppContext);
    const { details: product } = props;

    const productQuantity = appContext.cart.find(cartProduct => cartProduct.id === product.id)?.quantity;
    const onProductAdd = () => appContext.handleProductAdd(product);
    // const onProductDelete = () => appContext.handleProductDelete(product.id);

    return (
        <article className="product">
            <div className="product-image-container">
                <Link href={`products/${product.id}`}>
                    <a><img className="product-image" alt={product?.title} src={product?.image}/></a>
                </Link>

                {productQuantity && 
                    <Badge rounded className="product-quantity-container">
                        <Badge rounded centerItems removeDefaultClass className="product-quantity">{productQuantity}</Badge>
                    </Badge>
                }
            </div>

            <div className="product-price">
                <Badge defaultBackground>${product?.price.toFixed(2)}</Badge>
            </div>

            <div className="product-info">
                <h4 className="product-info-name fw-600">{product?.title}</h4>
                <p className="product-info-rating">reviews - {product?.rating?.rate.toFixed(2)}</p>
                <p className="product-info-category fw-600">{product?.category}</p>
                <p className="product-info-description">{product.description}</p>
            </div>

            <div className="product-add-to-cart">
                {/* {productQuantity && <Button title="Remove from cart" outline className="product-delete" onClick={onProductDelete}>x</Button>} */}

                <Button defaultButton onClick={onProductAdd}>Add to cart</Button>
            </div>
        </article>
    );
}
