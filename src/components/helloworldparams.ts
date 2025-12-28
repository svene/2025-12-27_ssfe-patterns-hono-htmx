import {html} from "hono/html"

export const HelloWorldParams = (props: { greeting: string; greetee: string; }) =>
	html`<h3>${props.greeting} ${props.greetee}!</h3>`;
