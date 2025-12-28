import {html} from "hono/html"

const TEMPLATE = `<h1>Application Page</h1>`;
const ENDPOINT = `export function m01d01_init(app: Hono) {
  app.get(M01D01.URL, (c) => {
    return c.html(...);
`;
export const CODE = html`
<div class="codearea">
	<div class="codeareacell">
		<strong>Template (m01d01.ts)</strong>
		<pre><code>${TEMPLATE}</code></pre>
	</div>
	<div class="codeareacell">
		<strong>Route (m01d01.ts)</strong>
		<pre><code>${ENDPOINT}</code></pre>
	</div>
</div>`
;

