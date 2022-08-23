// Styles
import '../scss/App.scss';

// Components
import MainLayout from '../components/layouts/MainLayout';

export default function App({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
