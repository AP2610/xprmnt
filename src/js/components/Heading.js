import React from 'react';
import clsx from 'clsx';

export default function Heading(props) {
    const { children, type, className, isStyleguideHeading } = props;
    const classes = clsx({ 'ui-heading': isStyleguideHeading }, className)
    const headingElement = React.createElement(type, { className: classes }, children);

    return headingElement;
}