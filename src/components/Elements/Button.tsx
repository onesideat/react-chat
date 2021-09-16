import { forwardRef } from 'react';
import { ButtonProps } from '../../common/types';
import '../../styles/elements/button.scss';

const Button = forwardRef<any, ButtonProps>(({
    className = '',
    href,
    children,
    ...rest
}, ref) => {
    let el: JSX.Element;
    let type = href && href.length ? 'a' : 'button';
    let classString: string = 'button' + (className.length ? ' ' + className : '');

    if (type === 'a') {
        el = <a href={href} ref={ref} className={classString} {...rest}>{children}</a>;
    } else {
        el = <button type="button" ref={ref} className={classString} {...rest}>{children}</button>
    }

    return el;
});

export default Button;