import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
import {m05d01message} from "./m05d01message.tsx";
import {raw} from "hono/html";
export const URL = '/m05/d01';

function init(app: Hono) {
	m05d01message.init(app); // TODO: think about where the component initialization should happen. Maybe not here.
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage>
				<>
					<h1 class="title">UrlComponent-Page</h1>
					<button
						className="button"
						hx-get={m05d01message.URL + '?message=hello'}
						hx-target="#my-message"
					>Include Component
					</button>

					<div id="my-message"></div>
					<hr/>
					<p>Message Component is dynamically included using:</p>
					<pre>hx-get={raw(m05d01message.URL + '?message=hello')}</pre>

					<hr/>
				</>
			</BulmaPage>
		)
	});
}

export const m05d01 = {
	URL,
	init,
}
