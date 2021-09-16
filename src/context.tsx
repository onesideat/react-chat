import React, { useContext } from 'react';

const Context = React.createContext({
    username: '',
    gender: '',
    connected: false
});

export const useAppContext = () => useContext(Context);

export function ContextProvider({children}: {children: any}) {
    return (
        <Context.Provider value={useAppContext()}>
            {children}
        </Context.Provider>
    );
}