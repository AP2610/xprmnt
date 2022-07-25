import clsx from 'clsx';

/**
 * @function Input
 * @description Renders the Input component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the Input component.
 */
export default function Input(props) {
    const {type = 'text', className, isStyleguideInput, ...rest} = props;
    const classes = clsx(className, {'ui-textfield': isStyleguideInput});

    return <input className={classes} type={type} {...rest} />;
}
