import clsx from 'clsx';

/**
 * @function Link
 * @description Renders the Link component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the Link component.
 */
export default function Link(props) {
    const {children, className, ...rest} = props;
    const classes = clsx('ui-link', className);

    return <a className={classes} {...rest}>{children}</a>;
}
