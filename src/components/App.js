import React from "react";
import '../assets/css/reset.css';
import '../assets/css/style.css';
import Botao from "./Botao/Botao";
import Header from "./Header";
import Filmes from "./Filmes";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FilmeInfo from "./FilmeInfo";
import Lugares from "./Lugares";



function App()
{
    return(
        <div className="main">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Filmes />}/>
                    <Route path="/filme" element={<FilmeInfo />}/>
                    <Route path="/lugares" element={<Lugares />}/>
 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;