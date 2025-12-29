import {Hono} from "hono";
import {html} from "hono/html";
import {m02d01} from "./m02d01";
import {m02d02} from "./m02d02";
import {m02d03} from "./m02d03";
import {m02d04} from "./m02d04";

function init(app: Hono) {
	m02d01.init(app);
	m02d02.init(app);
	m02d03.init(app);
	m02d04.init(app);
}

function menu() {
	return html`
      <h1>JSX</h1>
      <ul>
        <li><a href="${m02d01.URL}" target="_blank">JSX 1</a> </li>
        <li><a href="${m02d02.URL}" target="_blank">JSX 2</a> </li>
        <li><a href="${m02d03.URL + '?greetee=You'}" target="_blank">JSX 3</a> </li>
        <li><a href="${m02d04.URL + '?greetee=You'}" target="_blank">JSX 4</a> </li>
      </ul>
      `
}

export const m02 = {
	init,
	menu,
};
