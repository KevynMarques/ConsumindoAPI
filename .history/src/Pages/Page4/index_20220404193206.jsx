import React from "react";


export default () => {
  const navigate = useNavigate();
  const  {veiculo, nome, codigo, ver, setVer, nomeP3. setC} = useContext(CustomContext);  
  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${codigo}/modelos${codigoP3}/ano`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api ano')
    })
    }, [])
  return (  
 <> 




 </> 
  );
}