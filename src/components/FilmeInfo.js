import { Link } from "react-router-dom";

export default function FilmeInfo(){
    return(
        <>
        <h1 className="selecione">Selecione o horário</h1>
        <div className="horarioDia">
            <p>Quinta-feira - 24/06/2022</p> {/* tem que vir de API */}
            <div className="hora">
                <Link to="/lugares">
                    
                  <div className="horarioFilme"> 
                    15:00 {/* tem que vir de API */} 
                  </div>  
                </Link>
              
              <div className="horarioFilme">
                19:00 {/* tem que vir de API */}
              </div>
            </div>
        </div>

        <div className="horarioDia">
            <p>Sexta-feira - 25/06/2021</p>
            <div className="hora">
              <div className="horarioFilme">
                15:00
              </div>
              <div className="horarioFilme">
                19:00
              </div>
            </div>
        </div>
        
        <div className="filmeFooter">
          <div className="filmeFooterCartaz">
            <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" /> {/* tem que vir de API */}
          </div>
          <p>Enola Holmes</p> {/* tem que vir de API */}
        </div>
        </>
          )

}