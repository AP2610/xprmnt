import {useState, useEffect, createContext} from 'react';

export const AppContext = createContext();

export function AppProvider(props) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark')
    const [currency, setCurrency] = useState(() => localStorage.getItem('currency') ?? 'USD');

    useEffect(() => {
        if (theme) localStorage.setItem('theme', theme);
    }, [theme])

    useEffect(() => {
        if (currency) localStorage.setItem('currency', currency);
    }, [currency])

    const handleThemeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const handleCurrencyChange = currency => setCurrency(currency);

    const contextValues = {
        theme,
        currency,
        handleThemeToggle,
        handleCurrencyChange
    }

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    )
}