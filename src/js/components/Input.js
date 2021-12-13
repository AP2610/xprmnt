import React from 'react';
import clsx from 'clsx';

export default function Input(props) {
    const {type = 'text', className, isStyleguideInput, ...rest} = props;
    const classes = clsx(className, {'ui-textfield': isStyleguideInput});

    return <input className={classes} type={type} {...rest} />;
}
