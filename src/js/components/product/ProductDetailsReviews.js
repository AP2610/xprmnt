export default function ProductDetailsReviews(props) {
    const { product } = props;

    return (
        <>
            <p>
                Stars <strong>{product?.rating?.rate}</strong>
            </p>
            <p>
                From <strong>{product?.rating?.count}</strong> reviews
            </p>
        </>
    );
}
