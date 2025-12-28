import {Hono} from "hono";
import { html } from "hono/html"

export const M01D01 = {
	URL: '/m01/d01',
}
export function m01d01_init(app: Hono) {
	app.get(M01D01.URL, (c) => {
		// const code = html`
		// 	{#include dev/svenehrke/demo/ssfepatterns/m01plain/m01d01_code}{/include}
		//  @template.jte.plainjte.page01_code()
		// `
		const code = html``
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
				${code}
			</div>
			</body>
			</html>`
		)
	})

}
