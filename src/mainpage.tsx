import {Hono} from "hono";
import { serveStatic } from 'hono/bun'
import {m00, M00Menu} from "./m00hello/m00";
import {m01, M01Menu} from "./m01html/m01";
import {m02, M02Menu} from "./m02jsx/m02";
import {m03, M03Menu} from "./m03pages/m03";

function init(app: Hono) {
	app.use('/static/*', serveStatic({ root: './' }))
	app.get('/', (c) => {
		return c.render(
			<>
				<html lang="en">
				<head>
					<meta charSet="UTF-8"/>
					<title>Server Side Frontend Patterns</title>
					<script src="/static/js/htmx.org/2.0.8/htmx.js"></script>
					<link rel="stylesheet" href="/static/css/bulma.min.css"/>
				</head>

				<body>
				<div className="container">
					<section className="section">
						<div className="container">
							<h1 className="title">Server Side Frontend Patterns</h1>
							<p className="subtitle">with HONO using plain HTML and JSX</p>
						</div>
					</section>

					<M00Menu></M00Menu>
					<M01Menu></M01Menu>
					<M02Menu></M02Menu>
					<M03Menu></M03Menu>

				</div>

				</body>

				</html>
			</>
		)
	});

	m00.init(app);
	m01.init(app);
	m02.init(app);
	m03.init(app);
}

export const mainpage = {
	init,
}
