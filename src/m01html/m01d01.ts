import {Hono} from "hono";
import {html} from "hono/html"

// docs:start page
export const M01D01 = {
	URL: '/m01/d01',
}

export function m01d01_init(app: Hono) {
	app.get(M01D01.URL, (c) => { // <--- routing
		return c.html( // <--- html()-template
			html`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<link rel="stylesheet" href="/static/css/simplepage.css"/>
				<link rel="stylesheet" href="/static/css/area_simple.css"/>
			</head>

			<body class="page">
			<div>
				<h1>Application Page</h1>
			</div>
			<hr>
			{/*docs:end page*/}
			<a href="http://localhost:4321/technologies/03_hono/m01/#1-basic-page-using-a-html-template">Docs</a>
			{/*docs:start page*/}
			</body>
			</html>`
		)
	});
}
// docs:end page
