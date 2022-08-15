// Hooks
import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';

// Components
import Loader from '../ui-elements/Loader';
import Product from "../product/Product";

const BASE_URL = 'https://fakestoreapi.com/';
const ENDPOINT = 'products';

export default function Products() {
    const [products, setProducts] = useState([]);
    const { request: getRequest, isLoading: getIsLoading } = useFetch(BASE_URL);

    useEffect(() => {
        getRequest(ENDPOINT)
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, [])

    // For debugging
    useEffect(() => console.log('Products-products: ', products), [products])

    const productsGrid = products.map(product => {
        return <Product details={product} key={product.id} />
    })

    if (getIsLoading) {
        return <Loader />
    }

    return (
        <div className="products-layout">
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="products-grid">
                {products && productsGrid}
            </div>
        </div>
    );
}
