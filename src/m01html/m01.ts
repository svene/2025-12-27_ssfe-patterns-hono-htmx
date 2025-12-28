import {Hono} from "hono";
import { m01d01_init} from "./m01d01";
import {M01D01} from "./m01d01";
import {html} from "hono/html";
import {M01D02, m01d02_init} from "./m01d02";


export function m01_init(app: Hono) {
	m01d01_init(app);
	m01d02_init(app);
}

export function m01_menu() {
	return html`
      <h1>HTML Helper</h1>
      <ul>
        <li><a href="${M01D01.URL}" target="_blank">Basic HTML Page</a> </li>
        <li><a href="${M01D02.URL}" target="_blank">Basic HTML Page</a> </li>
      </ul>
      `
}
