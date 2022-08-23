// Hooks
import usePageLoading from '../../common/hooks/usePageLoading';

// Components
import Loader from '../../components/ui-elements/Loader';
import Product from '../../components/product/Product';


export async function getServerSideProps() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    return {
        props: { products }
    }
}

export default function ProductsIndex(props) {
    const { products } = props;
    const { loading: requestIsLoading } = usePageLoading();

    const productsGrid = products && products.map(product => {
        return <Product details={product} key={product.id} />
    })

    if (requestIsLoading) {
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
