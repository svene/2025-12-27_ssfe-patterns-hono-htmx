import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
export const URL = '/m03/d02';

function init(app: Hono) {
	app.get(URL, (c) => {
		const greeting = c.req.query('greeting') ?? 'Hello';
		return c.render(
			<BulmaPage>
			<>
				<h1 class="title">Content Page with Param says: {greeting}</h1>
				<hr/>
			</>
			</BulmaPage>
		)
	});
}

export const m03d02 = {
	URL,
	init,
}
