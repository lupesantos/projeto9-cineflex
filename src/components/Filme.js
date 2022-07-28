import { Link } from "react-router-dom";
export default function Filme({ index, id, posterURL }) {
	return (
		<div className="filme">
			<Link to={`/filme/${id}`}>
				<img src={posterURL} alt="oi" />
			</Link>
		</div>
	);
}
