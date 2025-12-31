import {ComponentChildren} from "hono/jsx";

export const Child = (props: { children: ComponentChildren }) => (
	<div>
		Child: <span style="color: var(--bulma-warning)">{props.children}</span>
	</div>
);
