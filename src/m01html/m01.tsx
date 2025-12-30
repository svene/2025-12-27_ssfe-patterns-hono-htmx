import {Hono} from "hono";
import { m01d01_init } from "./m01d01";
import {M01D01} from "./m01d01";
import {M01D02, m01d02_init} from "./m01d02";
import {m01d03} from "./m01d03";
import {m01d04} from "./m01d04";
import {m01d05} from "./m01d05";
import {Maincard} from "../c00jsxcomponents/maincard.tsx";

function init(app: Hono) {
	m01d01_init(app);
	m01d02_init(app);
	m01d03.init(app);
	m01d04.init(app);
	m01d05.init(app);
}

export const M01Menu = () => (
	<>
		<section className="section">
			<h1 className="title">Simple Pages using HTML Helper</h1>
			<h2 className="subtitle">For basic usecases. Needs an endpoint.</h2>
			<h6 className="subtitle"></h6>

			<div className="fixed-grid">
				<div className="grid">
					<Maincard
						url={M01D01.URL}
						title={<>Basic HTML Page</>}
						subtitle={<>made using HTML Helper</>}
					>
						<div>Demo...</div>
					</Maincard>
					<Maincard
						url={M01D02.URL}
						title={<>Basic HTML Page</>}
						subtitle={<>using a HTML component</>}
					>
						<div>Demo...</div>
					</Maincard>
				</div>
			</div>
		</section>

{/*
					<h1>HTML Helper</h1>
					<ul>
						<li><a href={m01d03.URL + '?greetee=You'} target="_blank">Basic HTML Page</a></li>
						<li><a href={m01d04.URL} target="_blank">Basic HTML Page</a></li>
						<li><a href={m01d05.URL} target="_blank">Basic HTML Page</a></li>
					</ul>
*/}
				</>
				);

				export const m01 = {
				init,
			};
