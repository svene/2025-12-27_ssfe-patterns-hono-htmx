import {Hono} from "hono";
// docs:start page
export const URL = '/m02/d01';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<html lang="en">
			<head>
				<meta charset="UTF-8"/>
				<link rel="stylesheet" href="/static/css/simplepage.css"/>
				<link rel="stylesheet" href="/static/css/area_simple.css"/>
			</head>

			<body class="page">
			<div>
				<h1>Application Page</h1>
				{/*docs:end page*/}
				<hr/>
				<a href="http://localhost:4321/technologies/03_hono/m02/#1-basic-jsx-page">Docs</a>
				{/*docs:start page*/}
			</div>
			</body>
			</html>
		)
	});
}

// docs:end page

export const m02d01 = {
	URL,
	init,
}
