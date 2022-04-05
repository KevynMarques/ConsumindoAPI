import React, {useContext, useEffect, useState} from "react";
import { Sequencia, TextSelectP2, DadosAPi} from "../../Components/Textos/Style";
import { CustomContext } from "../../context/custom"; 
import {BotaoProximo, TextProximo ,  BotaoVoltar, BotaoVermais} from '../../Components/BotoesGenericos/style'
import { useNavigate } from "react-router-dom"; 
import {Organizador, Marcas} from '../../Components/Containers/style'
import { api } from "../../Services/api";


export default () => {

  const  {veiculo, nome, codigo, ver, setVer, nomeP3, codigoP3, nomeP4 } = useContext(CustomContext);  
  return (
    <>
    <Sequencia>veiculo {'>'} {veiculo} {'>'} {nome}  {'>'} {nomeP3} {'>'} {nomeP4}</Sequencia>
    <TextSelectP2 style={{marginTop: 30}} >
        Dados do veiculo
    </TextSelectP2> 

    <Organizador   style={{marginTop:130}} >
        { ver ? ano.map((ano, key)=>{
          return  (
           
              <Marcas  
              disabled={ codigoP4 === ano.codigo ? true : false }
              onClick={()=>( Selected(ano.codigo, ano.nome))}
              key={key} >
              <DadosAPi>
              {ano.nome}
              </DadosAPi>
               </Marcas>
           
          )
        }) : ano.map((ano, key)=> {

          return  (
           
            <Marcas   
            disabled={ codigoP4 === ano.codigo  ? true : false}
            onClick={()=> ( Selected(ano.codigo, ano.nome))}  
             key={key}>
            <DadosAPi>
            {ano.nome}
            </DadosAPi>
             </Marcas>
         
        )}).splice(0,3)}
        
         </Organizador> 
         
    </>
  ); 
} 