import '../scss/App.scss';

// Components
import Link from './components/Link';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
	return (
        <Container>
            <h1>UI Kit</h1>
            <Link href="https://react-tutorial.app">React Tutorial</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
        </Container>
	);
}

export default App;
