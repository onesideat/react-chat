import React from 'react';
import * as Types from '../../common/types';
import '../../styles/elements/grid.scss';

export const Container = (props: Types.GridContainerProps): JSX.Element => {
    let className = 'container';

    if (props.fluid)
        className += ' is-fluid';

    className += props.className ? ' ' + props.className : '';

    return <div className={className}>{props.children}</div>;
};

export const Row = (props: Types.GridRowProps): JSX.Element => {
    let className = 'row';

    if (props.alignItems)
        className += ' align-items-' + props.alignItems;

    className += props.className ? ' ' + props.className : '';

    return <div className={className}>{props.children}</div>
};

export const Col = (props: Types.GridColProps): JSX.Element => {
    let className = 'col';

    if (props.auto)
        className += ' is-auto';
    if (props.num)
        className += ' col-' + props.num;

    className += props.className ? ' ' + props.className : '';

    return <div className={className}>{props.children}</div>
};