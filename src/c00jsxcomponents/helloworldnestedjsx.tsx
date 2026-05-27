// docs:start component
import {Child} from "hono/jsx";

export const HelloWorldNestedJsx = (props: { children: Child }) => (
	<div className="area-border">
		<p>Hi there!</p>
		{props.children}
	</div>
);
// docs:end component
