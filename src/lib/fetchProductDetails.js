/**
 * @function getProductDetails Returns the product object. Used for all product detail dynamic routes within products/[productId].
 * @param {string} productId - The product ID in the current request.
 * @returns {Object|string} - Returns the product object if successful otherwise the error.
 */
export const getProductDetails = async (productId) => {
    try {
        const response = await fetch (`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error(`The request failed with the status ${response.statusText}`);

        const product = await response.json();
        if (!product) {
            // Not really needed when used in combination with getStaticPaths with 'fallback: false', but leaving it here for educational purposes.
            return {
                notFound: true
            }
        }

        return {
            props: { product }
        }
    } catch(error) {
        return error;
    }
}

/**
 * @function getProductDetails Returns the product object. Used for all product detail dynamic routes within products/[productId]. 
 * @description Returns the paths for productDetails dynamic routes.
 * @returns {Array} - An array of the product paths in the pattern { params: { key: value[string] } }.
 */
export const getProductPaths = async () => {
    try {
        const response = await fetch (`https://fakestoreapi.com/products`);
        if (!response.ok) throw new Error(`The request failed with the status ${response.statusText}`);

        const products = await response.json();
        if (!products) {
            return {
                notFound: true
            }
        }

        const paths = products.map(product => {
            return {
                params: { productId: product.id.toString() }
            }
        });
        
        // Add revalidate here
        return {
            paths,
            fallback: false
        };
    } catch(error) {
        return error;
    }
}