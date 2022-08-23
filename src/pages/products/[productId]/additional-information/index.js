import ProductDetailsLayout from '../../../../components/layouts/ProductDetailsLayout';

export default function ProductDetailsAdditionalIndex() {
    return (
        <ProductDetailsLayout>
            {(productDetails) => (
                <div className="product-details-additional-info">
                    <div>
                        <h4>Price</h4>
                        <p>${productDetails?.price}</p>
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p className="product-info-category">{productDetails?.category}</p>
                    </div>
                </div>
            )}
        </ProductDetailsLayout>
    );
}
