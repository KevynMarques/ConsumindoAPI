import React, { useContext } from "react";
import { TextSelectP2, TextButtonP2, DadosAPi, Sequencia  } from "../../Components/Textos/Style";
import { ButtonP2,Marcas, Organizador} from '../../Components/Containers/style'
import Car from '../../Images/carro.jpg'
import Moto from '../../Images/moto.png'
import Caminhao from '../../Images/caminhao.png'
import { TextSelectMarca } from "../../Components/Textos/Style";
import { createContext, useEffect } from "react";
import { api } from "../../Services/api";
import { useState } from "react";
import { BotaoProximo, BotaoVermais, BotaoVoltar, TextProximo } from "../../Components/BotoesGenericos/style";
import { useNavigate } from "react-router-dom";
import { CustomContext } from "../../context/custom";





export default (props) => { 
 
  const  {veiculo, setVeiculo} = useContext(CustomContext); 
  const  {nome, setNome} = useContext(CustomContext); 
  const navigate = useNavigate(); 
  const [codigo, setCodigo] = useState('')
  const [marcas, setMarcas] = useState([])
  const [ver, setVer] = useState(false); 
  
  const View =() => { 
    setVer(!ver);
  }
  
  const Selected=(codigo, nome) =>{
    setCodigo(codigo);
    setNome(nome); 
 }
   
  useEffect(() =>{ 
    api.get(`/${veiculo}/marcas`).then((response)=>{
      setMarcas(response.data)
    }).catch(()=>{ 
     console.log('Erro api page 2')
    })
    }, [veiculo])

    useEffect(() =>{ 
       setCodigo('')
      }, [veiculo])
   
  return ( 
    <>
      <Sequencia>veiculo {">"} {veiculo} {">"} {nome} </Sequencia>
      <TextSelectP2>
        Selecione o tipo do veiculo
      </TextSelectP2>
       
     <ButtonP2
       disabled={ veiculo === 'carros'  ? true: false}
       onClick={()=>(setVeiculo('carros'))} >
      <img src={Car} />
      <TextButtonP2  style={{left:28}}>Carros</TextButtonP2>
      </ButtonP2>

      <ButtonP2 style={{left:620}} 
       disabled={ veiculo === 'motos'  ? true : false}
       onClick={()=> setVeiculo('motos')}>
      <img src={Moto} />
      <TextButtonP2 style={{left:33}}>Motos</TextButtonP2>
      </ButtonP2>

      <ButtonP2 style={{left:780}} 
      disabled={ veiculo === 'caminhoes'  ? true : false}
      onClick={()=> setVeiculo('caminhoes')}>
      <img src={Caminhao} />
      <TextButtonP2>Caminhões</TextButtonP2>
      </ButtonP2>

      <TextSelectMarca>Selecione a marca do veiculo</TextSelectMarca>
 
      <Organizador>
        { ver ? marcas.map((marca, key)=>{
          return  (
           
              <Marcas 
              disabled={ codigo === marca.codigo ? true : false }
              onClick={()=>( Selected(marca.codigo, marca.nome))}
              key={key} >
              <DadosAPi>
              {marca.nome}
              </DadosAPi>
               </Marcas>
           
          )
        }) : marcas.map((marca, key)=> {

          return  (
           
            <Marcas 
            disabled={ codigo === marca.codigo  ? true : false}
            onClick={()=> ( Selected(marca.codigo, marca.nome))}  
             key={key}>
            <DadosAPi>
            {marca.nome}
            </DadosAPi>
             </Marcas>
         
        )}).splice(0,5)}
        
         </Organizador>

         <BotaoVermais onClick={View}>
         {ver ? 'ver menos...' : 'ver mais...'}
         </BotaoVermais>

         <BotaoProximo 
           onClick={()=> navigate("/Page3")} 
           disabled={ codigo  ? false : true}  >
              <TextProximo>Proximo</TextProximo>
         </BotaoProximo>

         <BotaoVoltar  onClick={()=>navigate("/")}>
           Voltar
         </BotaoVoltar>
     </>

  );
}


export function useVeiculo() {
  
}