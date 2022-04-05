import styled from 'styled-components'



export const  Ola = styled.h1 ` 
position: absolute;
width: 53px;
height: 41px;
left: 460px;
top: 57px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 41px;
color: #686868;
`;

export const BemVindo = styled.h2 `
font-family: 'Roboto', sans-serif;
position: absolute;
width: 342px;
height: 29px;
left: 460px;
top: 98px;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 29px;
color: #686868;
`;

export const DescPage1 = styled.p `
position: absolute;
width: 361px;
height: 47px;
left: 460px;
top: 150px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #686868;

`;

export const TextVeiculo = styled.p `
position: absolute;
left: 535px;
top: 471px;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 47px;
color: #686868;
font-family: 'Roboto', sans-serif;
background: #FAFAFA;
`;


/* ELEMENTOS DA PAGINA ---------------------------------------------------- 2 */

export const TextSelectP2  = styled.p `
position: absolute;
width: 210px;
height: 20px;
left: 425px;
top: 70px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
color: #787878;

`;

export const TextButtonP2 = styled.p `
position: absolute;
width: 45px;
height: 18px;
left: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #686868;
background: #FAFAFA;
`;

export const TextSelectMarca = styled.p `

position: absolute;
width: 222px;
height: 20px;
left: 425px;
top: 255px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
color: #787878;

`;

export const DadosAPi = styled.p `
font-weight: bold;
font-size: 16px;
color:#FC570C;
text-align: center;
padding-top: 6px;
padding-left: 5px;
padding-right: 5px;
background-color: white;
border-radius: 20px;
border:${props => props.disabled ? ' 1px solid #eb1a1a' : ' 0px solid #ffffff'};

`;


export  const Sequencia = styled.p `
position: absolute;
left: 420px;
top: 20px;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
color: #FC570C;
`;


/* ELEMENTOS DA PAGINA DE ENCERRAMENTO */ 

export const Fim = styled.p `
  text-align: center;
`;