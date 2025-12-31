import {Hono} from "hono";
import {HEAD} from "../components/head";
export const URL = '/m03/d03';

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

					<hr/>
					<hr/>
					<p>Recommended for special case pages of an application.</p>
					<p></p>
					<p>This page-component does not use a layout component.</p>
					<p>Instead it constructs a page by including the common parts like header, navigation and footer itself.</p>
					<p>So this component has an active role in the process of constructing a page,
						not a passive one as in the Content-Page Pattern.</p>
					<p>In the Content-Page Pattern the layout (including header, navigation and footer) is reusable.</p>
					<p>In this Custom-Page Pattern only the parts (header, navigation, footer) are reusable</p>

				</div>
			</div>

			</body>

			</html>
		)
	});
}

export const m03d03 = {
	URL,
	init,
}
