import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button({
    to,
    href,
    primary = false,
    small = false,
    large,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,

        ...passProps,
    }

    // Remove event listener when btn is disabled
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',
        {
            primary,
            [className]: className,
            outline,
            small,
            large,
            text,
            disabled,
            rounded
        }
    )

    return (
        <Comp className={classes}  {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;