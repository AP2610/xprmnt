// Components
import ProductDetailsLayout from '../../../../components/layouts/ProductDetailsLayout';

// Helpers
import { getProductDetails, getProductPaths } from '../../../../lib/fetchProductDetails';

export async function getStaticProps(context) {
    const productData = await getProductDetails(context.params.productId);
    return productData;
}

export async function getStaticPaths() {
    const pathData = getProductPaths();
    return pathData;
}

export default function ProductDetailsReviewsIndex(props) {
    const { product } = props;

    return (
        <ProductDetailsLayout product={product}>
            <>
                <p>
                    Stars <strong>{product?.rating?.rate}</strong>
                </p>
                <p>
                    From <strong>{product?.rating?.count}</strong> reviews
                </p>
            </>
        </ProductDetailsLayout>
    );
}
