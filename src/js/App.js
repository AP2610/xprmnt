// Styles
import '../scss/App.scss';

// Hooks

// Components
import Button from './components/ui-elements/Button';

/**
 * @function App
 * @description The main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
function App() {
    return (
        <div className="app row">
            <Button disabled>Normal button</Button>
            <Button outline>Outline button</Button>
        </div>
    );
}

/**
 * @function AppWrapper
 * @description The wrapper of the main component of this Application.
 * @returns {JSX} - The JSX for the component.
 */
function AppWrapper() {
    return (
        <div className="container">
            <App />
        </div>
    );
}

export default AppWrapper;
