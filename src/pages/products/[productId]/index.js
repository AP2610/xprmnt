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
                    <Button outline onClick={() => appContext.handleProductAdd(productDetails)}>${productDetails?.price}</Button>
                </div>
            )}
        </ProductDetailsLayout>
    );
}
