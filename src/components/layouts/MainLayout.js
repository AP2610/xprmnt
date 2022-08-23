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

                <div className="content-container">
                    {children}
                </div>

                <footer>Footer goes here</footer>
            </div>
        </AppProvider>
    );
}
