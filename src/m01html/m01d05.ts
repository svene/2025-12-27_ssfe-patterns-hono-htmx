import {Hono} from "hono";
import {html} from "hono/html"
// docs:start page
import {HelloWorldContent} from "../components/helloworldcontent"

const URL = '/m01/d05';
function init(app: Hono) {
	app.get(URL, (c) => {
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
				<h1>Page with Nested Components</h1>
				
				${HelloWorldContent({greetingText: html`<!-- Outer template -->
						<p>before nested content</p>
						${HelloWorldContent({greetingText: html`<p>NESTED CONTENT</p>`})} <!-- Nested template -->
						<p>after nested content</p>
					`})}
				<!-- docs:end page -->
				<hr>
				<a href="http://localhost:4321/technologies/03_hono/m01/#5-nested-components">Docs</a>
				<!-- docs:start page -->
			</div>
			</body>
			</html>`
		)
	})
// docs:end page

}
export const m01d05 = {
	URL,
	init,
}
