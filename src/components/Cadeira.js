export default function Cadeira({ index, cadeira, id }) {
	let assento = cadeira - (id - 1) * 50;

	return <p>Assento {assento}</p>;
}
