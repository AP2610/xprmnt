export const getAllProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error(`There was an error retrieving the products - ${response.statusText}`);

        const products = await response.json();
        if (!products) throw new Error(`No products were found - ${products}`);

        return products;
    } catch(error) {
        return error;
    }
}