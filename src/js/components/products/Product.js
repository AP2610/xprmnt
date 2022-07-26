// Hooks
import useCounter from '../../hooks/useCounter';

// Components
import Heading from '../ui-elements/Heading';
import Button from '../ui-elements/Button';


/**
 * @function Product
 * @description Renders the product component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the PRoduct component.
 */
export default function Product(props) {
    const { details: { name, description, image } } = props;
    const { count, increment, decrement } = useCounter();

    return (
        <div className='product'>
            {image && <img src={image} width='50' alt={description} />}
            <div className='product-info'>
                <Heading type="h2">{name}</Heading>
                <p>{description}</p>
            </div>

            <div className='product-buttons'>
                <Button className='product-sub' disabled={count === 0} onClick={decrement}>-</Button>
                <Heading type="h3" className='product-count'>{count > 0 ? count : ''}</Heading>
                <Button className='product-add' onClick={increment}>+</Button>
            </div>
        </div>
    );
}
