import React from 'react';
import clsx from 'clsx';

export default function Button(props) {
    const {children, className, ...rest} = props;
    const classes = clsx('ui-button', className);

    return <button className={classes} {...rest}>{children}</button>;
}
