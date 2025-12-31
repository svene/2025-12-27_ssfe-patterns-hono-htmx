import {Hono} from "hono";
export const URL = '/m05/d01/message';

function init(app: Hono) {
	app.get(URL, (c) => {
		const message = c.req.query('message') ?? '-';
		return c.render(
			<h3>{message}!</h3>
		)
	});
}

export const m05d01message = {
	URL,
	init,
}
