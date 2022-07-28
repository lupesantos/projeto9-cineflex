import { Link } from "react-router-dom";

export default function Resumo() {
	return (
		<div className="resumo">
			<div className="resumoCompraFilme">
				<h1 className="sucesso">Pedido feito com sucesso!</h1>
			</div>

			<h1>Filme e sessão</h1>
			<p>Enola Holmes</p>
			<p>24/06/2022 - 15:00</p>

			<h1>Ingressos</h1>
			<p>Assento 15</p>
			<p>Assento 16</p>

			<h1>Comprador</h1>
			<p>Nome: Luciano Pereira dos Santos</p>
			<p>CPF: 359.042.448-60</p>

			<div className="reservar">
				<Link to="/">
					<p>Voltar para Home</p>
				</Link>
			</div>
		</div>
	);
}
