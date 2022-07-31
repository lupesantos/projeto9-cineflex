import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DiaHorario from "./DiaHorario";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FilmeInfo() {
	const { iDfilme } = useParams();
	const navigate = useNavigate();
	const [filme, setFilme] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(
			`https://mock-api.driven.com.br/api/v7/cineflex/movies/${iDfilme}/showtimes`
		);

		requisicao.then((resposta) => {
			setFilme(resposta.data);
		});
	}, [iDfilme]);

	function back(event) {
		event.preventDefault();
		navigate("/");
	}

	return (
		<>
			<h1 className="selecione">Selecione o horário</h1>

			{filme.length === 0 ? (
				<h1>Carregando...</h1>
			) : (
				filme.days.map((item, index) => (
					<DiaHorario
						key={index}
						weekday={item.weekday}
						date={item.date}
						showtimes={item.showtimes}
					/>
				))
			)}

			<div onClick={back} className="voltaPagina">
				<p>back</p>
			</div>

			<div className="filmeFooter">
				<div className="filmeFooterCartaz">
					<img src={filme.posterURL} alt="oi" />
				</div>
				<p>{filme.title}</p>
			</div>
		</>
	);
}
