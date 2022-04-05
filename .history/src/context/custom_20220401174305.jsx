import { createContext } from "react";
import { useState } from "react";

export const CustomContext  = createContext(); 

export function CustomContextProvider ({children}) {

  const [veiculo, setVeiculo] = useState('carros')

   return (
     <CustomContext.Provider value={{veiculo, setVeiculo}}>
       {children}
     </CustomContext.Provider>
   );
}