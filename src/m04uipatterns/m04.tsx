import {Hono} from "hono";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";
import {m04d01} from "./m04d01";

function init(app: Hono) {
	m04d01.init(app);
}

export const M04Menu = () => (
	<>
		<section className="section">
			<h1 className="title">UI Patterns</h1>
			<h2 className="subtitle">For reusable UI parts and components</h2>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url={m04d01.URL}
						title={<>Parent Child</>}
					>
						<div>Demo...</div>
					</Maincard>

				</div>
			</div>
		</section>
	</>
);

export const m04 = {
	init,
};
