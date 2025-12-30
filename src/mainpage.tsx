import {Hono} from "hono";
import { serveStatic } from 'hono/bun'
import {m00} from "./m00hello/m00.ts";
import {m01, M01Menu} from "./m01html/m01";
import {m02} from "./m02jsx/m02";
import {m03} from "./m03pages/m03";

function init(app: Hono) {
	app.use('/static/*', serveStatic({ root: './' }))
	app.get('/', (c) => {
		return c.render(
			<>
				{m00.menu()}
				<M01Menu></M01Menu>
				{m02.menu()}
				{m03.menu()}
			</>
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
