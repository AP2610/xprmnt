// Hooks
import { useState, useEffect } from 'react';
import { useParams, NavLink, Routes, Route } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

// Components
import Loader from '../ui-elements/Loader';
import ProductDetailsDescription from './ProductDetailsDescription';
import ProductDetailsAdditional from './ProductDetailsAdditional';
import ProductDetailsReviews from './ProductDetailsReviews';

export default function ProductDetails() {
    const [details, setDetails] = useState({});
    const params = useParams();
    const BASE_URL = 'https://fakestoreapi.com/';
    const ENDPOINT = `products/${params.id}`;
    const { request: getRequest, isLoading: getIsLoading } = useFetch(BASE_URL);

    useEffect(() => {
        getRequest(ENDPOINT)
            .then((data) => setDetails(data))
            .catch((error) => console.log(error));
    }, []);

    // Debugging
    useEffect(() => console.log('ProductDetails-details: ', details), [details]);

    if (getIsLoading) {
        return <Loader />;
    }

    return (
        <div className="product-details-layout">
            <div>
                <h3 className="product-details-name">{details?.title}</h3>
                <img width="125" height="125" className="product-details-image" alt={details?.title} src={details?.image} />
            </div>

            <div>
                <div className="tabs">
                    <ul>
                        <li>
                            <NavLink end className={({ isActive }) => (isActive ? 'tab-active ' : '')} to="">
                                Description
                            </NavLink>
                        </li>
                        <li>
                            <NavLink end className={({ isActive }) => (isActive ? 'tab-active ' : '')} to="additional-information">
                                Additional Information
                            </NavLink>
                        </li>
                        <li>
                            <NavLink end className={({ isActive }) => (isActive ? 'tab-active ' : '')} to="reviews">
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route path="" element={<ProductDetailsDescription product={details} />} />
                    <Route path="additional-information" element={<ProductDetailsAdditional product={details} />} />
                    <Route path="reviews" element={<ProductDetailsReviews product={details} />} />
                </Routes>
            </div>
        </div>
    );
}
