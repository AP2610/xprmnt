import React from 'react';

export default function Button(props) {
    const { type, disabled, children } = props;

    return <button className="ui-button" type={type} disabled={disabled}>{children}</button>
}