import { Link } from "react-router-dom";
import Cadeira from "./Cadeira";

export default function Resumo({ lugares, objPost }) {
	console.log(objPost);
	let teste = objPost.iDsessao;
	return (
		<div className="resumo">
			<div className="resumoCompraFilme">
				<h1 className="sucesso">Pedido feito com sucesso!</h1>
			</div>

			<h1>Filme e sessão</h1>
			<p>{lugares.movie.title}</p>
			<p>
				{lugares.day.weekday} - {lugares.name}h
			</p>

			<h1>Ingressos</h1>

			{objPost.ids.map((item, index) => (
				<Cadeira key={index} cadeira={item} id={teste} />
			))}

			<h1>Comprador</h1>
			<p>Nome: {objPost.name}</p>
			<p>CPF: {objPost.cpf}</p>

			<div className="reservar">
				<Link to="/">
					<p>Voltar para Home</p>
				</Link>
			</div>
		</div>
	);
}
