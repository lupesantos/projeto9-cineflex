import React from "react";

export default function Assento({
	index,
	name,
	isAvailable,
	id,
	clicado,
	setClicado,
}) {
	const [reservei, setReservei] = React.useState("");
	let ar = [...clicado];

	function reserva() {
		if (reservei === "") {
			setReservei("selecionado");
			setClicado([...clicado, id]);
		} else {
			setReservei("");
			setClicado(clicado.filter((value) => value !== id));
		}
	}

	console.log(clicado);
	function reservado() {
		alert("Este lugar está indisponível!");
	}

	return isAvailable === false ? (
		<div onClick={reservado} className="assentos indisponivel">
			{name}
		</div>
	) : (
		<div onClick={reserva} className={`assentos ${reservei} `}>
			{name}
		</div>
	);
}
