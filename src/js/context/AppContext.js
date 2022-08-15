import { useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

export default function AppProvider(props) {
    const [cart, setCart] = useState(() => {
        let savedCart = [];
        try {
            savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        } catch (error) {
            savedCart = [];
        }
        return savedCart;
    });

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

    const numberOfProducts = cart.reduce((total, currentProduct) => total + currentProduct.quantity, 0);
    const cartTotalValue = cart.reduce((total, currentProduct) => total + currentProduct.quantity * currentProduct.price, 0).toFixed(2);

    // Debugging
    useEffect(() => console.log('AppContext-cart: ', cart), [cart]);

    const value = {
        cart,
        numberOfProducts,
        cartTotalValue,
        handleProductAdd,
        handleProductDelete,
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
