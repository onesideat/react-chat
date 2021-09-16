import React, { ReactNode } from "react";

/**
 * Routes
 */
 export type Routes = {
    [key: string]: {
        path: string;
        Component: React.LazyExoticComponent<any>
    };
};

/**
 * Menu List
 */
export type MenuItems = {
    [key: string]: {
        name: string;
        href?: string;
        to?: string,
        target?: '_blank' | '_self' | '_parent' | '_top';
    };
};

/**
 * Grid Container Properties
*/
export type GridContainerProps = {
    fluid?: boolean;
    className?: string;
    children?: React.ReactNode;
    [propName: string]: any
};

/**
 * Grid Row Properties
*/
export type GridRowProps = {
    className?: string;
    alignItems?: 'center';
    children?: React.ReactNode;
    [propName: string]: any
}

/**
 * Grid Col Properties
*/
export type GridColProps = {
    className?: string;
    auto?: boolean;
    num?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    children?: React.ReactNode;
    [propName: string]: any
}

/**
 * Button Properties
 */
export type ButtonProps = {
    href?: string,
    className?: string;
    children?: ReactNode;
    [propName: string]: any
}

/**
 * Input Properties
 */
export type InputProps = {
    type: 'checkbox' | 'color' | 'date' | 'email' | 'file' | 'hidden' | 'number' | 'password' | 'radio' | 'tel' | 'text' | 'textarea' | 'time' | 'url',
    className?: string;
    children?: string;
    label?: string;
    error?: string;
    [propName: string]: any
}

/**
 * Chat
 */
 export type Chat = {
    message: string,
    username: string,
    gender: string,
    timestamp: number,
    error?: boolean
}