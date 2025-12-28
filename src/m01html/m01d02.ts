import {Hono} from "hono";
import {html} from "hono/html"
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
			</head>

			<body class="page">
			<div>
				<h1>Page with Component</h1>
				<!-- Include Component: -->
				${HELLO_WORLD}
				<hr>
				${CODE}
			</div>
			</body>
			</html>`
		)
	})

}
const CODE = '';
