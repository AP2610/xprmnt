// Components
import Navbar from '../navigation/Navbar';

// Context
import AppProvider from '../../common/context/AppContext';

export default function MainLayout(props) {
    const { children } = props;

    return (
        <AppProvider>
            <div className="page-container">
                <Navbar />

                <div className="content-container">
                    {children}
                </div>

                <footer>Footer goes here</footer>
            </div>
        </AppProvider>
    );
}
