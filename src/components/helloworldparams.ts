import {html} from "hono/html"

// docs:start component
export const HelloWorldParams = (props: { greeting: string; greetee: string; }) =>
	html`<h3>${props.greeting} ${props.greetee}!</h3>`;
// docs:end component
