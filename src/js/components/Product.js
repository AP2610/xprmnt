import React, {useState} from 'react';

export default function Product(props) {
    const [amount, setAmount] = useState(0);
    const { details: { name, description, image } } = props;

    const handleIncrementClick = () => setAmount(amount + 1);

    const handleDecrementClick = () => { if (amount > 0) setAmount(amount - 1) };

    return <div className='product'>
        <img src={image} width='50' alt={description} />
        <div className='product-info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        <div className='product-buttons'>
            <button className='product-sub' disabled={amount === 0} onClick={handleDecrementClick}>-</button>
            <h3 className='product-count'>{amount > 0 ? amount : ''}</h3>
            <button className='product-add' onClick={handleIncrementClick}>+</button>
        </div>
    </div>
}
