import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
// docs:start page
import {Parent} from "./m04d01parent.tsx";
export const URL = '/m04/d01';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<BulmaPage>
				<>
					<h1 class="title">ParentChild-Page</h1>
						<div className="area-border p-1">
							<Parent greeting={"hello"}></Parent>
						</div>
					{/*docs:end page*/}
					<hr/>
					<a href="http://localhost:4321/technologies/03_hono/m04/#1-parent-child">Docs</a>
					{/*docs:start page*/}
				</>
			</BulmaPage>
		)
	});
}
// docs:end page

export const m04d01 = {
	URL,
	init,
}
