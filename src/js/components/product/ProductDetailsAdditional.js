export default function ProductDetailsAdditional(props) {
    console.log('props: ', props);
    const { product } = props;

    return (
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
    );
}
