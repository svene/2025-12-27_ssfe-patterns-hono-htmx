import {Hono} from "hono";
import {html} from "hono/html";
import {m02d01} from "./m02d01";
import {m02d02} from "./m02d02";
import {m02d03} from "./m02d03";
import {m02d04} from "./m02d04";
import {m02d05} from "./m02d05";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";

function init(app: Hono) {
	m02d01.init(app);
	m02d02.init(app);
	m02d03.init(app);
	m02d04.init(app);
	m02d05.init(app);
}

export const M02Menu = () => (
	<>
		<section className="section">
			<h1 className="title">Simple Pages using JSX</h1>
			<h2 className="subtitle">Recommended for all non-trivial usecases. Needs an endpoint.</h2>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url={m02d01.URL}
						title={<>Basic JSX Page</>}
						subtitle={<>made using JSX</>}
					>
						<div>Demo...</div>
					</Maincard>
					<Maincard
						url={m02d02.URL}
						title={<>Basic JSX Page</>}
						subtitle={<>using a JSX component</>}
					>
						<div>Demo...</div>
					</Maincard>
					<Maincard
						url={m02d03.URL + '?greetee=You'}
						title={<>Page and Component</>}
						subtitle={<>with parameters</>}
						recommendation={<>When page and/or component need parameters</>}
					>
						<div>Demo...</div>
					</Maincard>
					<Maincard
						url={m02d04.URL}
						title={<>Content parameter</>}
						subtitle={<>passed from page to component</>}
						recommendation={<>When html needs to be passed into component</>}
					>
						<div>Demo...</div>
					</Maincard>
					<Maincard
						url={m02d05.URL}
						title={<>Nested components</>}
						subtitle={<>or: template in template</>}
						recommendation={<>If you need components in content-parameters</>}
					>
						<div>Demo...</div>
					</Maincard>
				</div>
			</div>
		</section>
	</>
);

export const m02 = {
	init,
};
