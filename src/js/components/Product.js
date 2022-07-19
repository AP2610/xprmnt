import {useState} from 'react';
import Heading from './Heading';
import Button from './Button';

/**
 * @function Product
 * @description Renders the product component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the PRoduct component.
 */
export default function Product(props) {
    const [amount, setAmount] = useState(0);
    const { details: { name, description, image } } = props;

    const handleIncrementClick = () => setAmount(amount + 1);

    const handleDecrementClick = () => { if (amount > 0) setAmount(amount - 1) };

    return (
        <div className='product'>
            {image && <img src={image} width='50' alt={description} />}
            <div className='product-info'>
                <Heading type="h2">{name}</Heading>
                <p>{description}</p>
            </div>

            <div className='product-buttons'>
                <Button className='product-sub' disabled={amount === 0} onClick={handleDecrementClick}>-</Button>
                <Heading type="h3" className='product-count'>{amount > 0 ? amount : ''}</Heading>
                <Button className='product-add' onClick={handleIncrementClick}>+</Button>
            </div>
        </div>
    );
}
