import { Link } from "react-router-dom";
import Assento from "./Assento";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Lugares() {
	const { iDsessao } = useParams();
	const [lugares, setLugares] = useState([]);
	const [clicado, setClicado] = useState([]);

	useEffect(() => {
		let isMounted = true;

		const requisicao = axios.get(
			`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${iDsessao}/seats`
		);

		requisicao.then((resposta) => {
			if (isMounted) setLugares(resposta.data);
		});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div>
			<h1 className="selecione">Selecione o(s) assento(s)</h1>
			<div className="salaCinema">
				{lugares.length === 0 ? (
					<h1>oi2</h1>
				) : (
					lugares.seats.map((item, index) => (
						<Assento
							key={index}
							name={item.name}
							isAvailable={item.isAvailable}
							id={item.id}
							clicado={clicado}
							setClicado={setClicado}
						/>
					))
				)}
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
				<input type="text" placeholder="Digite seu nome..." />
				<p>CPF do Comprador:</p>
				<input type="text" placeholder="Digite seu CPF..." />
			</div>

			<div className="reservar">
				<Link to="/resumo">
					<p>Resevar assento(s)</p>
				</Link>
			</div>

			<div className="filmeFooter">
				{lugares.length === 0 ? (
					<h1>Oi3</h1>
				) : (
					<>
						<div className="filmeFooterCartaz">
							<img src={lugares.movie.posterURL} alt="oi" />{" "}
							{/* tem que vir de API */}
						</div>

						<div className="infoFooter">
							<p>{lugares.movie.title}</p>
							<p>
								{lugares.day.weekday} - {lugares.name}
							</p>{" "}
							{/* tem que vir de API */}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
