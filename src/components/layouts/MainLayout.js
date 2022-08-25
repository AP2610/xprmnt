// Components
import Header from '../header/Header';

// Context
import AppProvider from '../../common/context/AppContext';
import Footer from '../footer/Footer';

export default function MainLayout(props) {
    const { children } = props;

    return (
        <AppProvider>
            <div className="page-container">
                <Header />

                <main className="content-container">
                    {children}
                </main>

                <Footer />
            </div>
        </AppProvider>
    );
}
