// Components
import ProductDetailsLayout from '../../../components/layouts/ProductDetailsLayout';
import Button from '../../../components/ui-elements/Button';

// Hooks
import { useContext } from 'react';

// Context
import { AppContext } from '../../../common/context/AppContext';

// Helpers
import { getProductDetails, getProductPaths } from '../../../lib/fetchProductDetails';

export async function getStaticProps(context) {
    const productData = await getProductDetails(context.params.productId);
    return productData;
}

export async function getStaticPaths() {
    const pathData = getProductPaths();
    return pathData;
}

export default function ProductDetailsIndex(props) {
    const appContext = useContext(AppContext);
    const { product } = props;

    return (
        <ProductDetailsLayout product={product}>
            <div className="details-details-description">
                <p>{product?.description}</p>
                <p>${product?.price?.toFixed(2)}</p>
                <Button defaultButton onClick={() => appContext.handleProductAdd(product)}>Add to cart</Button>
            </div>
        </ProductDetailsLayout>
    );
}
