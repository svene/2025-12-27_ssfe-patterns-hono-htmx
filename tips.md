= Hono Tips
== use html snippets in JSX:

page.tsx:
````
function init(app: Hono) {
app.get('/', (c) => {
return c.render(
<div>
{hello()}
</div>
)
})
}
````

component.ts
````
function hello() {
	return html`
		<h1>Hello</h1>
      `
}
````

== use JSX snippets in HTML:
consumer.ts
````
import { html } from 'hono/html'
import { render } from 'hono/jsx-server' // server-side rendering

export const BODY = html`
  <div>
    ${render(<MyJSX />)}
  </div>
`
````

component.tsx
````
const MyJSX = () => <strong>Hi from JSX!</strong>
````

== return multiple siblings from a JSX component:

JSX in general can only return one root JSX node.
To return multiple siblings at the top level use:

````
app.get('/', (c) => {
  return c.render(
    <>
      <div>
      </div>
    </>
````

If <> would not be supported use:
````
app.get('/', (c) => {
  return c.render(
    <Fragment>
      <div>
      </div>
    </Fragment>
````

