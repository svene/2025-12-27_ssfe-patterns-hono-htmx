import {Hono} from "hono";
export const URL = '/m02/d01';

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
				<h1>Application Page</h1>
				<hr/>
			</div>
			</body>
			</html>
		)
	});
}

	/*
			jsxRenderer((props, c) => {
				return (
					<DefaultLayout title={`Hello ${username}`}>
						<HomePage username={username} />
					</DefaultLayout>
				)
			})
	*/


export const m02d01 = {
	URL,
	init,
}
