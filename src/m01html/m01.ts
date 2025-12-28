import {Hono} from "hono";
import { m01d01_init} from "./m01d01";
import {M01D01} from "./m01d01";
import {html} from "hono/html";


export function m01_init(app: Hono) {
	m01d01_init(app);
}

export function m01_menu() {
	return html`
      <h1>HTML Helper</h1>
      <ul>
        <li><a href="${M01D01.URL}" target="_blank">Hello HTML</a> </li>
      </ul>
      `
}
