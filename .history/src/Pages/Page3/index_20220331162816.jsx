import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";



export default () => {
  return (
    <>
    <Sequencia>veiculo {props.nome} </Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}