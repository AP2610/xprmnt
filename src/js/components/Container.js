import React from 'react';

export default function Container(props) {
    const {children} = props;

    return <div className="ui-container">{children}</div>;
}