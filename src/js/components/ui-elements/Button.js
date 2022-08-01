import clsx from 'clsx';

export default function Button(props) {
    const {className, children, disabled, outline, ...rest} = props;
    const classes = clsx('btn', className, {
        'btn-default': !outline,
        'btn-outline': outline,
        'disabled': disabled
    });

    return (
        <button className={classes} disabled={disabled} {...rest}>{children}</button>
    );
}