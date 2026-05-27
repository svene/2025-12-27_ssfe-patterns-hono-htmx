import {Child} from "hono/jsx";

// docs:start component
export const TheChild = (props: { children: Child }) => (
	<div>
		Child: <span style="color: var(--bulma-warning)">{props.children}</span>
	</div>
);
// docs:end component
