// Components
import ProductDetailsLayout from '../../../components/layouts/ProductDetailsLayout';
import Button from '../../../components/ui-elements/Button';

// Hooks
import { useContext } from 'react';

// Context
import { AppContext } from '../../../common/context/AppContext';
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
    const response = await fetch (`https://fakestoreapi.com/products/${context.params.productId}`);
    const product = await response.json();
    
    return {
        props: { product }
    }
}

export async function getStaticPaths() {
    const response = await fetch (`https://fakestoreapi.com/products`);
    const products = await response.json();
    console.log('products :', products);

    const productPaths = products.map(product => {
        return {
            params: { productId: product.id.toString() }
        }
    })

    return {
        paths: productPaths,
        fallback: false, // can also be true or 'blocking'
    };
}


// TODO - Use the product here from props and do not fetch stuff in productDetailsLayout
export default function ProductDetailsIndex({ product }) {
    const appContext = useContext(AppContext);

    return (
        <ProductDetailsLayout product={product}>
            {(productDetails) => (
                <div className="details-details-description">
                    <p>{product?.description}</p>
                    <p>${product?.price?.toFixed(2)}</p>
                    <Button defaultButton onClick={() => appContext.handleProductAdd(product)}>Add to cart</Button>
                </div>
            )}
        </ProductDetailsLayout>
    );
}
