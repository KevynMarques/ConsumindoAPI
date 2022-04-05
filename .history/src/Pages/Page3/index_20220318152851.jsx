import { Sequencia, TextSelectP2 } from "../../Components/Textos/Style";



export default ({route, navigateion}) => {
  const {nome, codigo, veiculo} = route.params;
  return (
    <>
    <Sequencia>{veiculo}</Sequencia>
    <TextSelectP2 >
        Selecione o modelo do veiculo
    </TextSelectP2>
    </>
  );
}