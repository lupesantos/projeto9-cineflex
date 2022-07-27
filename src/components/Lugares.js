import { Link } from "react-router-dom";

export default function Lugares(){
    return (
        <div>
            <h1 className="selecione">Selecione o(s) assento(s)</h1>
            <div className="salaCinema">
                <div className="assentos">
                    01
                </div>
                <div className="assentos">
                    02
                </div>
                <div className="assentos">
                    03
                </div>
                <div className="assentos">
                    04
                </div>
                <div className="assentos">
                    05
                </div>
                <div className="assentos">
                    06
                </div>
                <div className="assentos">
                    07
                </div>
                <div className="assentos">
                    08
                </div>
                <div className="assentos">
                    09
                </div>
                <div className="assentos">
                    10
                </div>
            </div>

            <div className="statusLugares">
                <div className="status">
                    <div className="assentos selecionado"></div>
                    <p>Selecionado</p>
                </div>
                <div className="status">
                    <div className="assentos"></div>
                    <p>Disponível</p>
                </div>
                <div className="status">
                    <div className="assentos indisponivel"></div>
                    <p>Indisponível</p>
                </div>           
            </div>

            <div className="dadosComprador">
                <p>Nome do Comprador:</p>
                <input type="text" placeholder="Digite seu nome..."/>
                <p>CPF do Comprador:</p> 
                <input type="text" placeholder="Digite seu CPF..."/>
            </div>

            <div className="reservar">
                <Link to="/resumo">
                <p>Resevar assento(s)</p>
                </Link>  
            </div>

            <div className="filmeFooter">
                <div className="filmeFooterCartaz">
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" /> {/* tem que vir de API */}
                </div>  
                <div className="infoFooter">
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p> {/* tem que vir de API */}
                </div>
            </div>

        </div>
    )
}