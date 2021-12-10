import '../scss/App.scss';
import React, {useState} from 'react';
import StoreFront from './components/Storefront';
import Button from './components/Button';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (!loggedIn) {
        return (<>
            <h2>Please login</h2>
            <Button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</Button>
        </>);
    }

    return (<>
        <StoreFront />
        <Button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</Button>
    </>);
}

export default App;
