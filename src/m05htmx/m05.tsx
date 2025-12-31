import {Hono} from "hono";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";
import {m05d01} from "./m05d01";

function init(app: Hono) {
	m05d01.init(app);
}

export const M05Menu = () => (
	<>
		<section className="section">
			<h1 className="title">HTMX Patterns</h1>
			<h2 className="subtitle">For more interactivity</h2>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url={m05d01.URL}
						title={<>URL Components</>}
						subtitle={<>include components dynamically by their URL</>}
					>
						<div>Demo...</div>
					</Maincard>

				</div>
			</div>
		</section>
	</>
);

export const m05 = {
	init,
};
