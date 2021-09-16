import { forwardRef } from 'react';
import { InputProps } from '../../common/types';
import '../../styles/elements/input.scss';

const Input = forwardRef<any, InputProps>(({
    type = 'text',
    className = '',
    children,
    label,
    error,
    ...rest
}, ref) => {
    let el: JSX.Element;
    let classString = 'ui-field' + (className.length ? ' ' + className : '');

    if (error)
        classString += ' has-error';

    if (type === 'textarea') {
        el = <textarea className={classString} {...rest}>{children}</textarea>
    } else {
        el = (
            <div className={classString}>
                <input type={type} ref={ref} className="ui-input" {...rest}></input>
                {error ? <small>{error}</small> : null }
            </div>
        )
    }

    return el;
})

export default Input;