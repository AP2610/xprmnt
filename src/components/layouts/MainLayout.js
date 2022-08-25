// Components
import Header from '../header/Header';

// Context
import AppProvider from '../../common/context/AppContext';

export default function MainLayout(props) {
    const { children } = props;

    return (
        <AppProvider>
            <div className="page-container">
                <Header />

                <main className="content-container">
                    {children}
                </main>

                <footer>Footer goes here</footer>
            </div>
        </AppProvider>
    );
}
