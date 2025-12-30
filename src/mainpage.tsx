import {Hono} from "hono";
import { serveStatic } from 'hono/bun'
import {m00} from "./m00hello/m00.ts";
import {m01} from "./m01html/m01";
import {m02} from "./m02jsx/m02";
import {m03} from "./m03pages/m03";

function init(app: Hono) {
	app.use('/static/*', serveStatic({ root: './' }))
	app.get('/', (c) => {
		return c.render(
			<div>
				{m00.menu()}
				{m01.menu()}
				{m02.menu()}
				{m03.menu()}
			</div>
		)
	});

	m00.init(app);
	m01.init(app);
	m02.init(app);
	m03.init(app);
}

export const mainpage = {
	init,
}
