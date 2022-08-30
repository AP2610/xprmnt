import { useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

export default function AppProvider(props) {
    const [theme, setTheme] = useState('');
    const [cart, setCart] = useState(() => {
        let savedCart = [];
        try {
            savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        } catch (error) {
            savedCart = [];
        }
        return savedCart;
    });
    const isDarkMode = theme === 'dark';

    
    useEffect(() => {
        // Second part needs to be wrapped in parentheses otherwise it does not short circuit with the nullish coalescing operator.
        const preferredTheme = localStorage.getItem('theme') ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
        setTheme(preferredTheme);
    }, [])

    // Set class based on theme.
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    }, [theme]);

    // Set user preferred theme to local storage.
    useEffect(() => {
        if (theme) localStorage.setItem('theme', theme);
    }, [theme])

    useEffect(() => {
        if (cart && cart.length) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const handleProductAdd = (newProduct) => {
        const existingProduct = cart.find((product) => product.id === newProduct.id);

        if (existingProduct) {
            const updatedCart = cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });

            setCart(updatedCart);
        } else {
            const productToAdd = { ...newProduct, quantity: 1 };
            setCart([...cart, productToAdd]);
        }
    };

    const handleProductDelete = (productID) => {
        const updatedCart = cart.filter((product) => product.id !== productID);
        setCart(updatedCart);
    };

    const handleThemeToggle = () => setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');

    const numberOfProducts = cart.reduce((total, currentProduct) => total + currentProduct.quantity, 0);
    const cartTotalValue = cart.reduce((total, currentProduct) => total + currentProduct.quantity * currentProduct.price, 0).toFixed(2);

    const value = {
        cart,
        numberOfProducts,
        cartTotalValue,
        handleProductAdd,
        handleProductDelete,
        handleThemeToggle,
        isDarkMode
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
