import {Hono} from "hono";
import {html} from "hono/html"
// docs:start page
import {HelloWorldParams} from "../components/helloworldparams"

const URL = '/m01/d03';
function init(app: Hono) {
	app.get(URL, (c) => {
		const greetee = c.req.query('greetee') ?? '-';
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
				<h1>Page and Component</h1>
				<!-- Include Component:
				first parameter passed literally from this template.
				Second parameter coming in from HTTP-request:
				-->
				${HelloWorldParams({greeting: 'Hey', greetee})}
				{/*docs:end page*/}
				<hr>
				<a href="http://localhost:4321/technologies/03_hono/m01/#3-page-and-component-with-parameters">Docs</a>
				{/*docs:start page*/}
			</div>
			</body>
			</html>`
		)
	})
}
// docs:end page

export const m01d03 = {
	URL,
	init,
}

/* TODO:
JSX version:

import { jsxRenderer } from 'hono/jsx-renderer'
import { FC } from 'hono/jsx'

const HelloWorldParams: FC<{ greeting: string; greetee: string }> = ({ greeting, greetee }) => (
  <h3>{greeting} {greetee}!</h3>
)

app.get(
  '*',
  jsxRenderer(() => (
    <html>
      <body>
        <HelloWorldParams greeting="hello" greetee="you" />
      </body>
    </html>
  ))
)
*/
