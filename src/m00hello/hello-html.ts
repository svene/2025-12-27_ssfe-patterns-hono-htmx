import {Hono} from "hono";
import { html } from "hono/html"

export function hello_html_init(app: Hono) {
	app.get('/hello/:username', (c) => {
		const { username } = c.req.param()
		return c.html(
			html`<!doctype html>
      <h1>Hello from HTML Helper! ${username}!</h1>`
		)
	})

}
