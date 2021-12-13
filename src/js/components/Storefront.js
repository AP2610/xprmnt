import React, { useState } from 'react';
import Product from './Product';
import Input from './Input';
import Button from './Button';

function handleValidation(name, description, setValidationMessage) {
    if (!name && !description) {
        setValidationMessage('Please enter a product name and description.');
        return false;
    }

    if (!name) {
        setValidationMessage('Please enter a product name.');
        return false;
    }

    if (!description) {
        setValidationMessage('Please enter a product description.');
        return false;
    }

    return true;
}

export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        
        // Validation
        const isValid = handleValidation(name, description, setValidationMessage);
        if (!isValid) return;

        // Set new products
        setProducts([...products, {
            id: `000-123-${products.length}`,
            name,
            description
        }]);

        // Reset the form
        setName('');
        setDescription('');
        setValidationMessage('');
    }

    function handleDeleteClick({id}) {
        setProducts(products.filter(product => product.id !== id));
    }

    const productsList = products.map(product => {
        return <li key={product.id}>
            <Product details={product} />
            <Button onClick={() => handleDeleteClick(product)} className="btn-outline btn-delete">Delete</Button>
        </li>
    });

    return <>
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <Input 
                    id="name"
                    type="text" 
                    placeholder="Enter the name" 
                    className="textfield" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <Input 
                    id="description"
                    type="text" 
                    placeholder="Enter the description" 
                    className="textfield" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <div className="form-footer">
                {validationMessage && <div className="validation-message">{validationMessage}</div>}
                <Input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>

        {/* Render products */}
        {products.length === 0 && <div><p>Add your first product</p></div>}

        <ul className="store-front">
            {productsList}
        </ul>
    </>;
}
