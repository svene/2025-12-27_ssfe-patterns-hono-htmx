import {Hono} from "hono";
import { m01d01_init } from "./m01d01";
import {M01D01} from "./m01d01";
import {html} from "hono/html";
import {M01D02, m01d02_init} from "./m01d02";
import {m01d03} from "./m01d03";

function init(app: Hono) {
	m01d01_init(app);
	m01d02_init(app);
	m01d03.init(app);
}

function menu() {
	return html`
      <h1>HTML Helper</h1>
      <ul>
        <li><a href="${M01D01.URL}" target="_blank">Basic HTML Page</a> </li>
        <li><a href="${M01D02.URL}" target="_blank">Basic HTML Page</a> </li>
        <li><a href="${m01d03.URL + '?greetee=You'}" target="_blank">Basic HTML Page</a> </li>
      </ul>
      `
}

export const m01 = {
	init,
	menu,
};
