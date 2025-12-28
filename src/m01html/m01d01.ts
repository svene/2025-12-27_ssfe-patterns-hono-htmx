import {Hono} from "hono";
import {html} from "hono/html"
import {CODE} from "./m01d01_code";

export const M01D01 = {
	URL: '/m01/d01',
}

export function m01d01_init(app: Hono) {
	app.get(M01D01.URL, (c) => {
		return c.html(
			html`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<link rel="stylesheet" href="/static/css/simplepage.css"/>
			</head>

			<body class="page">
			<div>
				<h1>Application Page</h1>
				<hr>
				${CODE}
			</div>
			</body>
			</html>`
		)
	});
}
