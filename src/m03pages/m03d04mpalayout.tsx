import type { ComponentChildren } from 'hono/jsx'
import {m03d04p1} from "./m03d04mpapage1.tsx";
import {m03d04p2} from "./m03d04mpapage2.tsx";

export const M03d04MpaLayout = (props: {selectedMenu: string, children: ComponentChildren }) => (
	<html lang="en">
	<head>
		<meta charSet="UTF-8"/>
		<title>Application/Page Patterns</title>
		<script src="/static/js/htmx.org/2.0.8/htmx.js"></script>
		<link rel="stylesheet" href="/static/css/bulma.min.css"/>
		<link rel="stylesheet" href="/static/css/main.css"/>
		<link rel="stylesheet" href="/static/css//simplepage.css"/>
	</head>

	<body>
	<section className="hero is-link">
		<div className="hero-body">
			<p className="title">Template Based Application/Page Patterns</p>
			<p className="subtitle">SSFE-Patterns Demo with HONO-JSX</p>
		</div>
	</section>

	<div className="container mt-1">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-menu">
				<div className="navbar-start">
					<a class={`navbar-item ${props.selectedMenu === 'page1' ? 'is-selected' : ''}`} href={m03d04p1.URL}>Page 1</a>
					<a class={`navbar-item ${props.selectedMenu === 'page2' ? 'is-selected' : ''}`} href={m03d04p2.URL}>Page 2</a>
				</div>
			</div>
		</nav>

		<div className="p-1 mt-1 area-border" style="min-height: 500px">
			{props.children}
		</div>

		<hr/>

	</div>


	</body>
	</html>
);

