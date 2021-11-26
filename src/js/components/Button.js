import React from 'react';

export default function Button(props) {
    const { children, ...rest } = props;

    return <button className="ui-button" {...rest}>{children}</button>
}