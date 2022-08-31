import clsx from "clsx";

export default function Badge(props) {
    const { className, pill, striped, rounded, defaultBackground, withBorder, removeDefaultClass, children } = props;
    const badgeClasses  = clsx(className, {
        'badge': !removeDefaultClass,
        'badge-pill': pill,
        'badge-striped': striped,
        'badge-rounded': rounded,
        'badge-default-background': defaultBackground,
        'badge-with-border': withBorder
    });

    return (
        <div className={badgeClasses}>
            {children}
        </div>
    );
}
