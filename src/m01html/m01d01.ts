import {Hono} from "hono";
import { html } from "hono/html"

export const M01D01 = {
	URL: '/m01/d01',
}
export function m01d01_init(app: Hono) {
	app.get(M01D01.URL, (c) => {
		return c.html(
			html`<!doctype html>
      <h1>Hello from M01D01!</h1>`
		)
	})

}
