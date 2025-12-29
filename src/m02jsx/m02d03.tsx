import {Hono} from "hono";
import {HelloWorldParamsJsx} from "../c00jsxcomponents/helloworldparamsjsx.tsx";
import { raw } from "hono/html";

export const URL = '/m02/d03';

function init(app: Hono) {
	app.get(URL, (c) => {
		const greetee = c.req.query('greetee') ?? '-';
		return c.render(
			<html lang="en">
			<head>
				<meta charset="UTF-8"/>
				<link rel="stylesheet" href="/static/css/simplepage.css"/>
			</head>

			<body class="page">
			<div>
				<h1>Page with Component</h1>
				{/* Include Component:
				first parameter passed literally from this template.
				Second parameter coming in from HTTP-request:
				*/}
				<HelloWorldParamsJsx greeting="Hey" greetee={greetee}/>
				<hr/>
				{/* TODO: move to HONO demos: how to render HTML comment inside JSX */}
				{raw('<!-- This WILL be rendered into the HTML -->')}
			</div>
			</body>
			</html>
		)
	});
}

export const m02d03 = {
	URL,
	init,
}
