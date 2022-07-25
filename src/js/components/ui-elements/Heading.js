import React from 'react';
import clsx from 'clsx';

/**
 * @function Heading
 * @description Renders the Heading component.
 * @param {Object} props - Props received from the parent component.
 * @returns {JSX} The JSX for the Heading component.
 */
export default function Heading(props) {
    const { children, type, className, isStyleguideHeading } = props;
    const classes = clsx({ 'ui-heading': isStyleguideHeading }, className)
    const headingElement = React.createElement(type, { className: classes }, children);

    return headingElement;
}