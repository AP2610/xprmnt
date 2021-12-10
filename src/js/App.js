import '../scss/App.scss';
import React, {useState} from 'react';
import StoreFront from './components/Storefront';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (!loggedIn) {
        return (<>
            <Heading type="h2">Please login</Heading>
            <Button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</Button>
        </>);
    }

    return (<>
        <StoreFront />
        <Button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</Button>
    </>);
}

export default App;
