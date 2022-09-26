// Hooks
import usePageLoading from '../../common/hooks/usePageLoading';

// Components
import Loader from '../../components/ui-elements/Loader';
import ProductGrid from '../../components/product/ProductGrid';

// Helpers
import { getAllProducts } from '../../lib/fetchProducts';


export async function getStaticProps() {
    const products = await getAllProducts();

    return {
        props: { products }
    }
}

export default function ProductsIndex(props) {
    const { products } = props;
    const { loading: requestIsLoading } = usePageLoading();

    if (requestIsLoading) {
        return <Loader />
    }

    return (
        <ProductGrid products={products}>
            <h1>Products</h1>
            <p>Take a look at our products</p>
        </ProductGrid>
    );
}
