import React from 'react';

export default function Input(props) {
    console.log(props);
    const {type, placeholder, name } = props;

    return <input className="ui-textfield" type={type || 'text'} placeholder={placeholder} name={name} />
}