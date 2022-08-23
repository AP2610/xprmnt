import Navbar from "../navigation/Navbar";

export default function Header(props) {
    const { className, ...rest } = props;

    return (
        <header className={`site-header ${className}`} {...rest}>
            <Navbar />
        </header>
    )
}