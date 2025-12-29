import {Hono} from "hono";
import {HelloWorldContentJsx} from "../c00jsxcomponents/helloworldcontentjsx.tsx";

export const URL = '/m02/d04';

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
				<h1>Page with ContentParams-Component</h1>
				{/* Include Component: */}
				<HelloWorldContentJsx>
					How are you?<br/>
					Hopefully <strong>very well</strong>.<br/>
					<p>See you soon!</p>
				</HelloWorldContentJsx>
				<hr/>
			</div>
			</body>
			</html>
		)
	});
}

export const m02d04 = {
	URL,
	init,
}
