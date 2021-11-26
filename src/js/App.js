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
            <Link href="https://react-tutorial.app">Shop online</Link>
            <Button type="button">Button</Button>
            <Input placeholder="Enter your email" type="email" name="email" />
        </Container>
	);
}

export default App;
