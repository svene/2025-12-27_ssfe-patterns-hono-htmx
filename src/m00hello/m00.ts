import {Hono} from "hono";
import {html} from "hono/html";
import {hello_html_init} from "./hello-html";
import {hello_jsx_init} from "./hello-jsx";

export function m00_init(app: Hono) {
	hello_html_init(app);
	hello_jsx_init(app);
}

export function m00_menu() {
	return html`
		<h1>First Steps</h1>
		<ul>
			<li><a href="/hello/html" target="_blank">Hello HTML</a> </li>
			<li><a href="/hellojsx/jsx" target="_blank">Hello JSX</a> </li>
		</ul>
      `
}
