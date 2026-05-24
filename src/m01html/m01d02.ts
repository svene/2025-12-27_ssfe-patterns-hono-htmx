import {Hono} from "hono";
import {html} from "hono/html"
// docs:start page
import {HELLO_WORLD} from "../components/helloworld"

export const M01D02 = {
	URL: '/m01/d02',
}

export function m01d02_init(app: Hono) {
	app.get(M01D02.URL, (c) => {
		return c.html(
			html`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<link rel="stylesheet" href="/static/css/simplepage.css"/>
				<link rel="stylesheet" href="/static/css/area_simple.css"/>
			</head>

			<body class="page">
			<div>
				<h1>Page with Component</h1>
				<!-- Include Component: -->
				${HELLO_WORLD}
				<hr>
				<a href="http://localhost:4321/technologies/03_hono/m01/#2-basic-page-using-a-html-component">Docs</a>
			</div>
			</body>
			</html>`
		)
	})

}
// docs:end page

