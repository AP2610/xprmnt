import React from 'react';

export default function Heading(props) {
    const { children, type } = props;
    const headingElement = React.createElement(type, { className: 'ui-heading' }, children);
    

    console.log('headingElement: ', headingElement);
    return headingElement;
}