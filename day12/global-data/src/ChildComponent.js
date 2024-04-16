import React, { createContext, useContext } from 'react';

const InitialContext = createContext("Initial Data");

export default function ChildComponent() {
    const valueFromContext = useContext(InitialContext);

    return (
        <>
            <h1>{valueFromContext}</h1>
            <InitialContext.Provider value='Changed Data'>
                <h1>{valueFromContext}</h1>
            </InitialContext.Provider>
        </>
    );
}
