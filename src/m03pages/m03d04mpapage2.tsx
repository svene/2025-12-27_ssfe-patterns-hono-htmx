import {Hono} from "hono";
// docs:start page
import {M03d04MpaLayout} from "./m03d04mpalayout.tsx";
export const URL = '/m03/d04p2';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<M03d04MpaLayout selectedMenu="page2">
				<div className="is-flex is-justify-content-space-around p-1">
					<div className="p-1">
						<h4 class="subtitle is-4">Lorem ipsum dolor sit amet</h4>
					</div>
				</div>
			</M03d04MpaLayout>
		)
	});
}
// docs:end page

export const m03d04p2 = {
	URL,
	init,
}

