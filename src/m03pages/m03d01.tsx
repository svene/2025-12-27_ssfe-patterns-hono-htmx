import {Hono} from "hono";
// docs:start page
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
export const URL = '/m03/d01';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage>
			<>
				<h1 class="title">Content Page</h1>
				{/*docs:end page*/}
				<hr/>
				<a href="http://localhost:4321/technologies/03_hono/m03/#1-content-page">Docs</a>
				{/*docs:start page*/}
			</>
			</BulmaPage>
		)
	});
}
// docs:end page

export const m03d01 = {
	URL,
	init,
}
