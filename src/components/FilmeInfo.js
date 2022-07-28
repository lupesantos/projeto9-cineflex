import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DiaHorario from "./DiaHorario";
import axios from 'axios';

export default function FilmeInfo(){

  const iDfilme = useParams();

const [filme, setFilme] = useState([]);

    useEffect(()=>{

        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${iDfilme.iDfilme}/showtimes`);

        requisicao.then(resposta => {
            setFilme(resposta.data)
        });
   
      },[]);

console.log(filme);
console.log(filme.days);

    return(
        <>
        {filme.length === 0  ? (<h1>oi</h1>) :  (filme.days.map((item, index) => <DiaHorario
          key={index} 
          weekday={item.weekday}
          date={item.date}
          showtimes={item.showtimes}
          />))}
        <div className="filmeFooter">
          <div className="filmeFooterCartaz">
            <img src={filme.posterURL} /> 
          </div>
          <p>{filme.title}</p> 
        </div>

        </>
          )
}


