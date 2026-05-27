import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
// docs:start page
import {First} from "./m04d02first.tsx";
export const URL = '/m04/d02';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage>
				<>
					<h1 class="title">Forwarder-Page</h1>
					<First greeting="hello"></First>
					<First greeting="hello with forward"></First>
					<hr/>
					<a href="http://localhost:4321/technologies/03_hono/m04/#2-forwarder">Docs</a>
					{/*docs:start page*/}
				</>
			</BulmaPage>
		)
	});
}
// docs:end page

export const m04d02 = {
	URL,
	init,
}
