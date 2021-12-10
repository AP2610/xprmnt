import React from 'react';
import clsx from 'clsx';

export default function Button(props) {
    const {children, className, handleLoginLogout, isStyleguideButton, ...rest} = props;

    // To render a button from the UI Kit, isStyleguideButton must be set to true
    const classes = clsx({ 'ui-button': isStyleguideButton }, className);

    return <button className={classes} onClick={handleLoginLogout} {...rest}>{children}</button>;
}
