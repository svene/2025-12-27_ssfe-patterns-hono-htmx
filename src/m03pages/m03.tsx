import {Hono} from "hono";
import {m03d01} from "./m03d01";
import {m03d02} from "./m03d02";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";
import {m03d03} from "./m03d03.tsx";

function init(app: Hono) {
	m03d01.init(app);
	m03d02.init(app);
	m03d03.init(app);
}

export const M03Menu = () => (
	<>
		<section className="section">
			<h1 className="title">Page Patterns</h1>
			<h2 className="subtitle">For Multi Page Applications (MPAs)<br/>or just a single page</h2>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url={m03d01.URL}
						title={<>Content Page</>}
						recommendation={<>Recommended for most use cases</>}
					>
						<div>Demo...</div>
					</Maincard>

					<Maincard
						url={m03d02.URL + '?greeting=Hey You!'}
						title={<>Content Page</>}
						subtitle={<>taking a parameter</>}
						recommendation={<>When the page itself needs a parameter</>}
					>
						<div>Demo...</div>
					</Maincard>

					<Maincard
						url={m03d03.URL + '?greeting=Hey You!'}
						title={<>Custom Page</>}
						subtitle={<>taking a parameter</>}
						recommendation={<>When the opinionated content page does not fit</>}
					>
						<div>Demo...</div>
					</Maincard>
				</div>
			</div>
		</section>
	</>
);

export const m03 = {
	init,
};
