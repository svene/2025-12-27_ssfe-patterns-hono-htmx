import {Hono} from "hono";
import {HelloWorldJsx} from "../c00jsxcomponents/helloworldjsx";

export const URL = '/m02/d02';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<html lang="en">
			<head>
				<meta charset="UTF-8"/>
				<link rel="stylesheet" href="/static/css/simplepage.css"/>
			</head>

			<body class="page">
			<div>
				<h1>Page with Component</h1>
				<HelloWorldJsx/>
				<hr/>
			</div>
			</body>
			</html>
		)
	});
}

export const m02d02 = {
	URL,
	init,
}
