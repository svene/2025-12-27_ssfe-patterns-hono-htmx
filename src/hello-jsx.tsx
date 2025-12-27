import {Hono} from "hono";

export function hello_jsx_init(app: Hono) {
	app.get('/hellojsx/:username', (c) => {
		const { username } = c.req.param();
		const View = () => {
			return (
				<html>
				<body>
				<h1>Hello from JSX! {username}!</h1>
				</body>
				</html>
			)
		}

		return c.html(<View/>)

	})

}
