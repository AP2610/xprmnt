// Components
import ProductDetailsLayout from '../../../../components/layouts/ProductDetailsLayout';

// Helpers
import { getProductDetails, getProductPaths } from '../../../../lib/fetchProductDetails';

export async function getStaticProps(context) {
    const productData = await getProductDetails(context.params.productId);
    return productData;
}

export async function getStaticPaths() {
    const pathData =  getProductPaths();
    return pathData;
}

export default function ProductDetailsAdditionalIndex(props) {
    const { product } = props;

    return (
        <ProductDetailsLayout product={product}>
            <div className="product-details-additional-info">
                <div>
                    <h4>Price</h4>
                    <p>${product?.price}</p>
                </div>
                <div>
                    <h4>Category</h4>
                    <p className="product-info-category">{product?.category}</p>
                </div>
            </div>
        </ProductDetailsLayout>
    );
}
