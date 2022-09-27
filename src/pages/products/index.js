// Hooks
import usePageLoading from '../../common/hooks/usePageLoading';

// Components
import Loader from '../../components/ui-elements/Loader';
import ProductGrid from '../../components/product/ProductGrid';

// Helpers
import { getAllProducts } from '../../lib/fetchProducts';

// Using getServerSideProps instead of getStaticPaths so that in the future when logged in users create there own products, products will be refreshed at request time.
export async function getServerSideProps() {
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
