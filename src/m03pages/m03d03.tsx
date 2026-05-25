import {Hono} from "hono";
export const URL = '/m03/d03';
// docs:start page
import {HEAD} from "../components/head";

function init(app: Hono) {
	app.get(URL, (c) => {
		const greeting = c.req.query('greeting') ?? 'Hello';
		return c.render(
			<html lang="en">
			{HEAD}

			<body>
			<div className="container mt-1">

				<div className="p-1 mt-1">
					<h1 className="title">Custom Page with Param says: {greeting}</h1>
				</div>
				{/*docs:end page*/}
				<hr/>
				<a href="http://localhost:4321/technologies/03_hono/m03/#3-custom-page">Docs</a>
				{/*docs:start page*/}
			</div>
			</body>
			</html>
		)
	});
}
// docs:end page

export const m03d03 = {
	URL,
	init,
}
