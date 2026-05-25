import {Hono} from "hono";
// docs:start page
import {M03d04MpaLayout} from "./m03d04mpalayout.tsx";
export const URL = '/m03/d04p1';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<M03d04MpaLayout selectedMenu="page1">
				<div className="p-1">
					<div class="content">
						<p>Lorem ipsum ...</p>
						{/*docs:end page*/}
						<p>... dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</p>
						{/*docs:start page*/}

					</div>

				</div>
			</M03d04MpaLayout>
		)
	});
}
// docs:end page

export const m03d04p1 = {
	URL,
	init,
}

