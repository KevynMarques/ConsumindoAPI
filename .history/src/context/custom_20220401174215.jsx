import { createContext } from "react";

export const CustomContext  = createContext(); 

export function CustomContextProvider ({children}) {

  const [veiculo, setVeiculo] = useState('carros')

   return (
     <CustomContext.Provider>
       {children}
     </CustomContext.Provider>
   );
}