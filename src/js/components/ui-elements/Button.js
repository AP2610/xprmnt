import clsx from 'clsx';

/**
 * @function Button
 * @description Renders the Button component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the Button component.
 */
export default function Button(props) {
    const {children, className, isStyleguideButton, ...rest} = props;

    // To render a button from the UI Kit, isStyleguideButton must be set to true
    const classes = clsx({ 'ui-button': isStyleguideButton }, className);

    return <button className={classes} {...rest}>{children}</button>;
}
