import { Link } from "react-router-dom";
export default function Filme({ index, id, posterURL, setBackFilme }) {
	function guardaId() {
		setBackFilme(id);
	}

	return (
		<div onClick={guardaId} className="filme">
			<Link to={`/filme/${id}`}>
				<img src={posterURL} alt="oi" />
			</Link>
		</div>
	);
}
