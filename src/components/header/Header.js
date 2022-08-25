import clsx from "clsx";
import Navbar from "../navigation/Navbar";

export default function Header(props) {
    const { className, ...rest } = props;
    const classes = clsx('site-header', className);

    return (
        <header className={classes} {...rest}>
            <Navbar />
        </header>
    )
}