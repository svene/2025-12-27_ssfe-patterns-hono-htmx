import {Hono} from "hono";
import {HelloWorldNestedJsx} from "../c00jsxcomponents/helloworldnestedjsx.tsx";

export const URL = '/m02/d05';

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
				<h1>Page with Nested Components</h1>
				<HelloWorldNestedJsx>
					<p>before nested content</p>
					<HelloWorldNestedJsx>
						<p>NESTED CONTENT</p>
					</HelloWorldNestedJsx>
					<p>after nested content</p>
				</HelloWorldNestedJsx>
				<hr/>
			</div>
			</body>
			</html>
		)
	});
}

export const m02d05 = {
	URL,
	init,
}
