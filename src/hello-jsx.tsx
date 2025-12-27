import {Hono} from "hono";
import { html } from "hono/html"

export function hello_jsx_init(app: Hono) {
	app.get('/hellojsx/:username', (c) => {
		const { username } = c.req.param()
		return c.html(
			html`<!doctype html>
      <h1>Hello from JSX! ${username}!</h1>`
		)
	})

}
