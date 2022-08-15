// Components
import Button from "../ui-elements/Button";

export default function ProductDetailsDescription(props) {
    const { product } = props;

    return (
        <div className="product-details-description">
            <p>
                {product?.description}
            </p>
            <Button outline>${product?.price}</Button>
        </div>
    );
}
