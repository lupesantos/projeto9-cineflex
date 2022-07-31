import Filme from "./Filme";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Filmes({ backFilme, setBackFilme }) {
	const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const requisicao = axios.get(
			"https://mock-api.driven.com.br/api/v7/cineflex/movies"
		);

		requisicao.then((resposta) => {
			setFilmes(resposta.data);
		});
	}, []);

	return (
		<div className="filmes">
			<h1 className="selecione">Selecione o filme</h1>

			{filmes.map((item, index) => (
				<Filme
					key={index}
					id={item.id}
					posterURL={item.posterURL}
					backFilme={backFilme}
					setBackFilme={setBackFilme}
				/>
			))}
		</div>
	);
}
