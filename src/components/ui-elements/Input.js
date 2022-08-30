import clsx from "clsx";

export default function Input(props) {
    const { placeholder, type, className, inputSwitch, required, children, labelClassName, ...inputProps } = props;
    const inputClasses = clsx('input', className, {
        'custom-switch-input': inputSwitch
    });
    const labelClasses = clsx('label', labelClassName, {
        'custom-switch-label': inputSwitch
    });

    return (
        <label className={labelClasses}>
            {placeholder}

            {required && <span className="input-required">*</span>}

            <input type={type || "text"} className={inputClasses} placeholder={placeholder} required={required} {...inputProps} />
            {children}
        </label>
    )
}