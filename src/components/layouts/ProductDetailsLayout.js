// Components
import Link from "next/link";
import Loader from "../ui-elements/Loader";

// Hooks
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../../common/hooks/useFetch";

export default function ProductDetailsLayout(props) {
    const [productDetails, setProductDetails] = useState({});
    const router = useRouter();
    const { query } = router;
    const BASE_URL = 'https://fakestoreapi.com/';
    const ENDPOINT = `products/${query.productId}`;
    const { request: getRequest, isLoading: getIsLoading } = useFetch(BASE_URL);

    useEffect(() => {
        getRequest(ENDPOINT)
            .then((data) => setProductDetails(data))
            .catch((error) => console.log(error));
    }, [router.isReady]);

    if (getIsLoading) {
        return <Loader />;
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

                {props.children(productDetails)}
            </div>
        </div>
    );
}
