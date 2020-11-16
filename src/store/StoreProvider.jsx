import React, { useState } from 'react';

const obj = [
    {
        id: 1,
        title: "Napęd na wszystkie koła - Dwa silniki",
        content: "Napęd na wszystkie koła Tesla obejmuje dwa niezależne silniki, co zapewnia zwiększoną niezawodność. Każdy z nich ma tylko jedną ruchomą część — to rozwiązanie gwarantuje maksimum trwałości przy minimalnej konserwacji. Działa on inaczej niż tradycyjne napędy na wszystkie koła — silniki cyfrowo sterują momentem obrotowym przenoszonym na przednie i tylne koła, znacznie poprawiając jakość prowadzenia i kontrolę przyczepności"
    },
    {
        id: 2,
        title: "Performance - Najlepsze Przyspieszenie",
        content: "Model S wyznacza nowy standard pod względem osiągów i bezpieczeństwa. W pełni elektryczny układ napędowy Tesla zapewnia niezrównane osiągi w każdych warunkach pogodowych — za sprawą dwusilnikowego napędu na wszystkie koła, adaptacyjnego zawieszenia pneumatycznego i nieziemskiego przyspieszenia."
    },
]

export const StoreContext = React.createContext(null);


export const StoreProvider = ({children}) => {
    const [blogs, setBlogs] = useState(obj);
    const [isLoggedIn, setIsLoggedIn] = useState('');

    return (
        <StoreContext.Provider  value={{ blogs, setBlogs, isLoggedIn, setIsLoggedIn}}>
            {children}
        </StoreContext.Provider>
    )
}
