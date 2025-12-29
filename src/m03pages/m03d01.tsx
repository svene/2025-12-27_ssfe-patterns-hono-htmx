import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
export const URL = '/m03/d01';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage title="My Page">
			<div>
				<h1>M03D1 Page</h1>
				<hr/>
			</div>
			</BulmaPage>
		)
	});
}

export const m03d01 = {
	URL,
	init,
}
