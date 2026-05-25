import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
export const URL = '/m03/d02';

// docs:start page
function init(app: Hono) {
	app.get(URL, (c) => {
		const greeting = c.req.query('greeting') ?? 'Hello';
		return c.render(
			<BulmaPage>
			<>
				<h1 class="title">Content Page with Param says: {greeting}</h1>
				{/*docs:end page*/}
				<hr/>
				<a href="http://localhost:4321/technologies/03_hono/m03/#2-parameter">Docs</a>
				{/*docs:start page*/}
			</>
			</BulmaPage>
		)
	});
}
// docs:end page

export const m03d02 = {
	URL,
	init,
}
