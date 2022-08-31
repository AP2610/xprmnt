import clsx from "clsx";
import Navbar from "../navigation/Navbar";

export default function Header(props) {
    const { className} = props;
    const classes = clsx('site-header', className);

    return (
        <header className={classes}>
            <Navbar />
        </header>
    )
}