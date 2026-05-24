import {Hono} from "hono";
import {html} from "hono/html"
// docs:start page
import {HelloWorldContent} from "../components/helloworldcontent"

const URL = '/m01/d04';
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
				<h1>Page with ContentParams-Component</h1>
				<!--  include HTML content:  -->
				${HelloWorldContent({greetingText: html`
						How are you?<br>
						Hopefully <strong>very well</strong>.<br>
						<p>See you soon!</p>
					`})}
				{/*docs:end page*/}
				<hr>
				<a href="http://localhost:4321/technologies/03_hono/m01/#4-content-parameter">Docs</a>
				{/*docs:start page*/}
			</div>
			</body>
			</html>`
		)
	})

}
// docs:end page

export const m01d04 = {
	URL,
	init,
}
