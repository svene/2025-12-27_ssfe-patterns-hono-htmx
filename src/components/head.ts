import {html} from "hono/html"

export const HEAD = html`
	<head>
		<meta charset="UTF-8">
		<title>Application Page</title>
		<script src="/static/js/htmx.org/2.0.8/htmx.js"></script>
		<link rel="stylesheet" href="/static/css/bulma.min.css"/>
		<link rel="stylesheet" href="/static/css/area_bulma.css"/>
	</head>`;
