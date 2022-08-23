import clsx from "clsx";

export default function Input(props) {
    const { placeholder, type, className, required, ...inputProps } = props;
    const classes = clsx('input', className);

    return (
        <label className="label">
            {placeholder}

            {required && <span className="input-required">*</span>}

            <div>
                <input type={type || "text"} className={classes} placeholder={placeholder} required={required} {...inputProps} />
            </div>
        </label>
    )
}