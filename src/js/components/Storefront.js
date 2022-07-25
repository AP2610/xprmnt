import { useState, useEffect } from 'react';
import AddProductForm from './products/AddProductForm';
import Heading from './ui-elements/Heading';
import ProductList from './products/ProductList';
import Loader from './ui-elements/Loader';

/**
 * @function handleProductFormValidation
 * @description Processes validation rules for the add product form.
 * @param {string} name - The name state of the product form.
 * @param {string} description - The description state of the product form.
 * @param {Function} setValidationMessage - Function passed to set the correct validation message.
 * @returns {Boolean} - Whether the form is valid or not.
 */
function handleProductFormValidation(name, description, setValidationMessage) {
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

/**
 * @function StoreFront
 * @description Renders the storefront component with the product form and the product list.
 * @returns {JSX} - The JSX for the storefront component.
 */
export default function StoreFront() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const URL = 'https://react-tutorial-demo.firebaseio.com/products.json';

    // Fetch products
    useEffect(() => {
        // Need an IFFE to use async/await
        (async () => {
            try {
                const response = await fetch(URL);
                const productData = await response.json();
                if (productData) setProducts(productData);
            } catch(error) {
                console.log('There was an error: ', error);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])


    // Update the page title based on the number of products
    useEffect(() => {
        let title = 'No products';
        if (products.length) title = `${products.length} product${products.length !== 1 ? 's' : ''}`
        document.title = title;
    },  [products])

    /**
     * @function handleFormSubmit
     * @description Handles submission of the product form.
     * @param {Event} event - The add product submit event.
     * @returns {void}
     */
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        // Validation
        const isValid = handleProductFormValidation(name, description, setValidationMessage);
        if (!isValid) return;

        // Set new products
        setProducts([...products, {
            id: products.length,
            name,
            description
        }]);

        // Reset the form
        setName('');
        setDescription('');
        setValidationMessage('');
    }

    /**
     * @function handleDeleteClick
     * @description Deletes the product which matches the ID. Removes it from products state array.
     * @param {string} product.id - The ID of the product to delete.
     * @returns {void}
     */
    const handleDeleteClick = ({id}) => setProducts(products.filter(product => product.id !== id));

    // Show a loader when the request is still loading.
    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            {/* Render Add product form */}
            <AddProductForm 
                onFormSubmit={handleFormSubmit}
                productName={name}
                onNameChange={e => setName(e.target.value)}
                productDescription={description}
                onDescriptionChange={e => setDescription(e.target.value)}
                validationMessage={validationMessage}
            />

            {/* Render products heading */}
            {products.length === 0 && <Heading type="h4">Add your first product</Heading>}

            {/* Render products list */}
            <ProductList products={products} onDeleteClick={handleDeleteClick} />
        </>
    );
}
