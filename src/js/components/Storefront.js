// Hooks
import { useState, useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch';

// Context
import { AppContext } from '../context/AppContext';

// Components
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
    const appContext = useContext(AppContext);
    
    // Initialise useEffect with post and get baseUrls.
    const {request: getRequest, isLoading: getIsLoading} = useFetch('https://react-tutorial-demo.firebaseio.com/'); // GET
    const {request: postRequest, isLoading: postIsLoading} = useFetch('https://api.learnjavascript.online/demo/react/admin/'); // POST
    
    // Fetch products (GET).
    useEffect(() => {
        getRequest('products.json')
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []); // eslint-disable-line

    // Update the page title based on the number of products.
    useEffect(() => {
        let title = 'No products';
        if (products.length) title = `${products.length} product${products.length !== 1 ? 's' : ''}`
        document.title = title;
    },  [products]);

    /**
     * @function handleFormSubmit
     * @description Handles submission of the product form.
     * @param {Event} event - The add product submit event.
     * @returns {void}
     */
    const handleFormSubmit = event => {
        event.preventDefault();
        
        // Validation
        const isValid = handleProductFormValidation(name, description, setValidationMessage);
        if (!isValid) return;

        // Fetch products (POST)
        postRequest('products', {name, description})
            .then(data => {
                console.log('data: ', data);
                if (data) {
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
            })
            .catch(error => console.log(error));
    }

    /**
     * @function handleDeleteClick
     * @description Deletes the product which matches the ID. Removes it from products state array.
     * @param {string} product.id - The ID of the product to delete.
     * @returns {void}
     */
    const handleDeleteClick = ({id}) => setProducts(products.filter(product => product.id !== id));

    // Show a loader when the request is still loading.
    if (getIsLoading || postIsLoading) {
        return <Loader />;
    }

    return (
        <>
            <Heading style={{ color: '#fff' }} type="h3">Shopping in {appContext.currency} using the {appContext.theme} theme.</Heading>

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
