import {Hono} from "hono";
import {html} from "hono/html"
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
				<hr>
			</div>
			</body>
			</html>`
		)
	})

}
const CODE = '';
export const m01d04 = {
	URL,
	init,
}
