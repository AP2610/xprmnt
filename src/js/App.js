// Styles
import '../scss/App.scss';

// Hooks - React Stuff
import React, {useState, useContext} from 'react';

// Context
import { AppProvider, AppContext } from './context/AppContext';

// Components
import StoreFront from './components/Storefront';
import Button from './components/ui-elements/Button';
import Heading from './components/ui-elements/Heading';
// import Map from './components/Map';

/**
 * @function App
 * @description The main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const appContext = useContext(AppContext);

    if (!loggedIn) {
        return (
            <div className={appContext.theme}>
                <Heading type="h2">Please login</Heading>
                <Button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</Button>
                {/* <Map /> */}
            </div>)
        ;
    }

    return (
        <div className={appContext.theme}>
            <StoreFront />
            <div>
                <Button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</Button>
                <Button className="btn btn-outline toggle-theme" onClick={appContext.handleThemeToggle}>Toggle theme</Button>
            </div>

            {/* Just for demo purposes, this should be moved to the navbar along with the theme toggle */}
            <select className="btn btn-outline" onChange={(event) => appContext.handleCurrencyChange(event.target.value)}>
                <option disabled>Select a currency</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
            </select>
        </div>
    );
}

function AppWrapper() {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    )
}

export default AppWrapper;
