import clsx from 'clsx';

/**
 * @function Container
 * @description Renders the Container component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the Container component.
 */
export default function Container(props) {
    const { children, className, ...rest} = props;
    const classes = clsx('ui-container', className);

    return <div className={classes} {...rest}>{children}</div>;
}
