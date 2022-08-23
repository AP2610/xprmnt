import ProductDetailsLayout from '../../../../components/layouts/ProductDetailsLayout';

export default function ProductDetailsReviewsIndex() {
    return (
        <ProductDetailsLayout>
            {(productDetails) => {
                return (
                    <>
                        <p>
                            Stars <strong>{productDetails?.rating?.rate}</strong>
                        </p>
                        <p>
                            From <strong>{productDetails?.rating?.count}</strong> reviews
                        </p>
                    </>
                );
            }}
        </ProductDetailsLayout>
    );
}
