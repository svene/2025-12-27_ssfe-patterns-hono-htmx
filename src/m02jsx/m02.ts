import {Hono} from "hono";
import {m02d01} from "./m02d01";
import {html} from "hono/html";

function init(app: Hono) {
	m02d01.init(app);
}

function menu() {
	return html`
      <h1>JSX</h1>
      <ul>
        <li><a href="${m02d01.URL}" target="_blank">Basic JSX Page</a> </li>
      </ul>
      `
}

export const m02 = {
	init,
	menu,
};
