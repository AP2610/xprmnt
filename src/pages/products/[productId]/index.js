// Components
import ProductDetailsLayout from '../../../components/layouts/ProductDetailsLayout';
import Button from '../../../components/ui-elements/Button';

// Hooks
import { useContext } from 'react';

// Context
import { AppContext } from '../../../common/context/AppContext';

export default function ProductDetailsIndex() {
    const appContext = useContext(AppContext);

    return (
        <ProductDetailsLayout>
            {(productDetails) => (
                <div className="details-details-description">
                    <p>{productDetails?.description}</p>
                    <p>${productDetails?.price?.toFixed(2)}</p>
                    <Button onClick={() => appContext.handleProductAdd(productDetails)}>Add to cart</Button>
                </div>
            )}
        </ProductDetailsLayout>
    );
}
