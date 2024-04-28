import React, { createContext, useState, useContext } from 'react';

const ContadorContext = createContext();

export const useContador = () => useContext(ContadorContext);

export const ContadorProvider = ({ children }) => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const ContadorNegativo = () => {
        setContador(contador - 1);
    };

    return (
        <ContadorContext.Provider value={{ contador, incrementarContador,ContadorNegativo }}>
            {children}
        </ContadorContext.Provider>
    );
};