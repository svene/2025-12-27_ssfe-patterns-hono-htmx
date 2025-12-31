import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
export const URL = '/m03/d01';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage>
			<>
				<h1 class="title">Content Page</h1>
				<hr/>
			</>
			</BulmaPage>
		)
	});
}

export const m03d01 = {
	URL,
	init,
}
