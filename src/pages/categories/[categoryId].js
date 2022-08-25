// Hooks
import usePageLoading from '../../common/hooks/usePageLoading';
import ProductGrid from '../../components/product/ProductGrid';

// Components
import Loader from '../../components/ui-elements/Loader';

export async function getServerSideProps(context) {
    const { params } = context;
    let categoryID = params.categoryId;

    // Find a better way to do this, this is temporary.
    if (params.categoryId.includes('men')) {
        categoryID = 'men%27s%20clothing';
    } else if (params.categoryId.includes('women')) {
        categoryID = 'women%27s%20clothing'
    }

    const response = await fetch(`https://fakestoreapi.com/products/category/${categoryID}`);
    const products = await response.json()

    return {
        props: { 
            products,
            category: params.categoryId,
        }
    }
}

export default function ProductCategoryIndex(props) {
    const { products, category } = props;
    const { loading: requestIsLoading } = usePageLoading();

    if (requestIsLoading) {
        return <Loader />
    }

    return (
        <ProductGrid className="category-page" products={products}>
            <h1 className="category-name">{category.replace('-', ' ')}</h1>
            <p>Take a look at our products in the {category} category</p>
        </ProductGrid>
    );
}