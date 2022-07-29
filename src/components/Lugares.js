import Assento from "./Assento";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Lugares({ lugares, setLugares, setObjPost }) {
	const { iDsessao } = useParams();
	const [clicado, setClicado] = useState([]);

	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");

	const navigate = useNavigate();

	console.log(iDsessao);

	function fazerPost(event) {
		event.preventDefault();

		const teste = {
			ids: clicado,
			name: nome,
			cpf: cpf,
		};

		// setObjPost((objPost) => ({ //funciona 1
		// 	...objPost,
		// 	...teste,
		// }));

		setObjPost({ ...teste, iDsessao });

		const requisicao2 = axios.post(
			"https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
			{
				ids: clicado,
				name: nome,
				cpf: cpf,
			}
		);

		navigate("/resumo");
	}

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

			<form onSubmit={fazerPost}>
				<div className="dadosComprador">
					<p>Nome do Comprador:</p>
					<input
						type="text"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
						placeholder="Digite seu nome..."
					/>
					<p>CPF do Comprador:</p>
					<input
						type="text"
						value={cpf}
						onChange={(e) => setCpf(e.target.value)}
						placeholder="Digite seu CPF..."
					/>
					<button type="submit">Reservar assento(s)</button>
				</div>
			</form>

			<div className="filmeFooter">
				{lugares.length === 0 ? (
					<h1>Oi3</h1>
				) : (
					<>
						<div className="filmeFooterCartaz">
							<img src={lugares.movie.posterURL} alt="oi" />{" "}
						</div>

						<div className="infoFooter">
							<p>{lugares.movie.title}</p>
							<p>
								{lugares.day.weekday} - {lugares.name}h
							</p>{" "}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
