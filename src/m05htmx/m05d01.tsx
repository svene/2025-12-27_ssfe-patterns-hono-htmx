import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
// docs:start page
import {m05d01message} from "./m05d01message.tsx";
export const URL = '/m05/d01';

function init(app: Hono) {
	m05d01message.init(app); // TODO: think about where the component initialization should happen. Maybe not here.
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage>
				<>
					<h1 class="title">UrlComponent-Page</h1>
					{ /* include message component dynamically when button is clicked: */ }
					<button
						className="button"
						hx-get={m05d01message.URL + '?message=hello'}
						hx-target="#my-message"
					>Include Component
					</button>

					<div id="my-message"></div>
					{/*docs:end page*/}
					<hr/>
					<a href="http://localhost:4321/technologies/03_hono/m05/#1-url-components">Docs</a>
					{/*docs:start page*/}
				</>
			</BulmaPage>
		)
	});
}
// docs:end page

export const m05d01 = {
	URL,
	init,
}
