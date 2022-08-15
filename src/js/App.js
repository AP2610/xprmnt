// Styles
import '../scss/App.scss';

// Hooks

// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation-bar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import ProductDetails from './components/product/ProductDetails';

// Context
import AppProvider from './context/AppContext';

/**
 * @function App
 * @description The main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
function App() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="products" element={<Products />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="products/:id/*" element={<ProductDetails />} />
                    </Routes>
                </div>
            </main>
            <footer>Footer goes here</footer>
        </>
    );
}

/**
 * @function AppWrapper
 * @description The wrapper of the main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
function AppWrapper() {
    return (
        <AppProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppProvider>
    );
}

export default AppWrapper;
