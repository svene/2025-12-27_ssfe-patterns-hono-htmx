// docs:start component
import {ComponentChildren} from "hono/jsx";

export const HelloWorldContentJsx = (props: { children: ComponentChildren }) => (
	<div className="area-border">
		<p>Hi there!</p>
		{props.children}
	</div>
);
// docs:end component
