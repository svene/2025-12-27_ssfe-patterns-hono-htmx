import {Hono} from "hono";
import {m03d01} from "./m03d01";
import {html} from "hono/html";

function init(app: Hono) {
	m03d01.init(app);
}

function menu() {
	return html`
      <h1>JSX Pages</h1>
      <ul>
        <li><a href="${m03d01.URL}" target="_blank">Content Page</a> </li>
      </ul>
      `
}

export const m03 = {
	init,
	menu,
};
