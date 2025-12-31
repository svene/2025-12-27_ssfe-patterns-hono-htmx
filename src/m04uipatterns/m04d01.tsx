import {Hono} from "hono";
import {BulmaPage} from "../c00jsxcomponents/bulmapage";
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
					<hr/>
				</>
			</BulmaPage>
		)
	});
}

export const m04d01 = {
	URL,
	init,
}
