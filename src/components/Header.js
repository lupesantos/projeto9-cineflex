import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<Link to="/">
				<p>CINEFLEX</p>
			</Link>
		</div>
	);
}
