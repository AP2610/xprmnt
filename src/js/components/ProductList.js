import Product from './Product';
import Button from './Button';

/**
 * @function AddProductForm
 * @description Renders the Product List component.
 * @param {Object} props - Props received from parent component.
 * @returns {JSX} The JSX for the product list.
 */
export default function ProductList(props) {
    const { products, onDeleteClick } = props;

    const productsList = products.map(product => {
        return <li key={product.id}>
            <Product details={product} />
            <Button onClick={() => onDeleteClick(product)} className="btn-outline btn-delete">Delete</Button>
        </li>
    });

    return (
        <ul className="store-front">
            {productsList}
        </ul>
    );
}