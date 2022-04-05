import React, {useContext} from "react";
import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom";

export default () => { 
  const  {veiculo} = useContext(CustomContext); 
  const  {nome} = useContext(CustomContext); 
  return (
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome} </Sequencia>
    <TextSelectP2 style={{margin: 50'}} >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}