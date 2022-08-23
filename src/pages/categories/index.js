// Hooks
import usePageLoading from '../../common/hooks/usePageLoading';

// Components
import Loader from '../../components/ui-elements/Loader';


export async function getServerSideProps() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await response.json();

    return {
        props: { categories }
    }
}


export default function CategoriesIndex(props) {
    const { loading: requestIsLoading } = usePageLoading();
    const { categories } = props;
    return (
        <div>Categories Index page - {JSON.stringify(categories)}</div>
    )
}