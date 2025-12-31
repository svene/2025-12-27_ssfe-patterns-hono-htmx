import {Hono} from "hono";
import {M03d04MpaLayout} from "./m03d04mpalayout.tsx";

export const URL = '/m03/d04p1';

function init(app: Hono) {
	app.get(URL, (c) => {
		return c.render(
			<M03d04MpaLayout selectedMenu="page1">
				<div className="p-1">
					<div className="content">
						<p>The pages of this application all use a common layout component (the template).</p>
						<p>In contrast to the Inclusion Pattern the <strong>layout</strong> component <strong>plays an active role</strong><br/>
							in the template process because it pulls in the component.<br/>
							The component plays the passive role.<br/>
							Therefore it is the layout which uses the injection pattern, not the component.
						</p>
						<p>Since the components are injected into the layout dynamically<br/>
							it can be reused for all pages of the application.</p>

						<p>For this demo the injected component-content is surrounded with a colored border<br/>
							to show what is coming from the layout and what is coming from the component.<br/>
							Everything outside the border is coming from the layout template.<br/>
							Everything inside is comping from the injected component.
						</p>
					</div>

				</div>
			</M03d04MpaLayout>
		)
	});
}

export const m03d04p1 = {
	URL,
	init,
}

