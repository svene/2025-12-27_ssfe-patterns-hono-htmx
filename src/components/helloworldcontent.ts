import {html, type HtmlEscapedString} from "hono/html"

// docs:start component
export const HelloWorldContent = (props: { greetingText: HtmlEscapedString; }) =>
	html`<div class="area-border">
		<p>Hi there!</p>
		${props.greetingText}
	</div>`;
// docs:end component
