import { Link } from "react-router-dom";

export default function DiaHorario({ weekday, date, showtimes }) {
	return (
		<div className="horarioDia">
			<p>
				{weekday} - {date}
			</p>

			<div className="hora">
				<Link to={`/sessao/${showtimes[0].id}`}>
					<div className="horarioFilme">{showtimes[0].name}</div>
				</Link>

				<Link to={`/sessao/${showtimes[1].id}`}>
					<div className="horarioFilme">{showtimes[1].name}</div>
				</Link>
			</div>
		</div>
	);
}
