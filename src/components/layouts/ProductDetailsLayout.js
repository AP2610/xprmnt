// Components
import Link from 'next/link';
import Loader from '../ui-elements/Loader';

// Hooks
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import usePageLoading from '../../common/hooks/usePageLoading';

/**
 * @function ProductDetailsLayout - Decorates the product details page. Creates tab navigation for product details. Handles loading state.
 * @param {Object} props
 * @returns 
 */
export default function ProductDetailsLayout(props) {
    const [productDetails, setProductDetails] = useState({});
    const { loading: requestIsLoading } = usePageLoading();
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        setProductDetails(props.product);
    }, []);

    if (requestIsLoading) {
        return <Loader />
    }

    return (
        <div className="product-details-layout">
            <div>
                <h3 className="product-details-name">{productDetails?.title}</h3>
                <img width="125" height="125" className="product-details-image" alt={productDetails?.title} src={productDetails?.image} />
            </div>

            <div>
                <div className="tabs">
                    <ul>
                        <li>
                            <Link href={`/products/${query.productId}`}>
                                <a>Description</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/products/${query.productId}/additional-information`}>
                                <a>Additional Information</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/products/${query.productId}/reviews`}>
                                <a>Reviews</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {props.children}
            </div>
        </div>
    );
}
