// Hooks
import usePageLoading from '../../common/hooks/usePageLoading';

// Components
import Loader from '../../components/ui-elements/Loader';
import ProductGrid from '../../components/product/ProductGrid';


export async function getStaticProps() {
    const response = await fetch('https://fakestoreapi.com/products');
    console.log('response :', response);
    const products = await response.json();
    console.log('products :', products);

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
