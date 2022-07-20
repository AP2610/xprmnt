import '../scss/App.scss';
import React, {useState} from 'react';
import StoreFront from './components/Storefront';
import Button from './components/Button';
import Heading from './components/Heading';
import Map from './components/Map';

/**
 * @function App
 * @description The main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (!loggedIn) {
        return (<>
            <Heading type="h2">Please login</Heading>
            <Button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</Button>
            <Map />
        </>);
    }

    return (<>
        <StoreFront />
        <Button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</Button>
    </>);
}

export default App;
