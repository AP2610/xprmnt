import clsx from "clsx";

export default function Footer(props) {
    const { children, className } = props;
    const classes = clsx('page-footer', className);

    return (
        <footer className={classes}>
            {children || (
                <small className="page-footer-text">Created by Arjun Puri</small>
            )}
        </footer>
    )
}