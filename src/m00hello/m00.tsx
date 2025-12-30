import {Hono} from "hono";
import {hello_html_init} from "./hello-html";
import {hello_jsx_init} from "./hello-jsx";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";

function init(app: Hono) {
	hello_html_init(app);
	hello_jsx_init(app);
}

export const M00Menu = () => (
	<>
		<section className="section">
			<h1 className="title">Getting Started with HONO</h1>
			<h2 className="subtitle">Basic Examples</h2>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url="/hello/html"
						title={<>Hello HTML</>}
					>
						<div>Demo...</div>
					</Maincard>
					<Maincard
						url="/hellojsx/jsx"
						title={<>Hello JSX</>}
					>
						<div>Demo...</div>
					</Maincard>
				</div>
			</div>
		</section>
	</>
);

export const m00 = {
	init,
};
