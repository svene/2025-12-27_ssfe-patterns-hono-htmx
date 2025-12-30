import {Hono} from "hono";
import {m03d01} from "./m03d01";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";

function init(app: Hono) {
	m03d01.init(app);
}

export const M03Menu = () => (
	<>
		<section className="section">
			<h1 className="title">Simple Pages using JSX</h1>
			<h2 className="subtitle">Recommended for all non-trivial usecases. Needs an endpoint.</h2>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url={m03d01.URL}
						title={<>Content Page</>}
						recommendation={<>Recommended for most use cases</>}
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
