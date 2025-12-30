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

== props.children

props.children is a special prop that represents whatever you wrap inside a component’s opening and closing tags.

````
function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

<Card>
  <h1>Hello</h1>
  <p>This is inside the card</p>
</Card>

````

== multiple named content areas

````
// Component:
const Layout = ({ header, footer, children }) => {
  return (
    <html>
      <body>
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
      </body>
    </html>
  )
}
// Usage:
app.get("/", (c) => {
  return c.html(
    <Layout
      header={<h1>My Site</h1>}
      footer={<small>© 2025</small>}
    >
      <p>Main content goes here</p>
    </Layout>
  )
})

````

== Optional parts

````
type MaincardProps = {
	title: ComponentChildren
	subtitle?: ComponentChildren
}

export const Maincard = (props: MaincardProps) => {
	return (
		<div>
            <p className="title is-4 mb-1">{props.title}</p>
            {props.subtitle && (
                <p className="title is-6 mb-1">
	    			{props.subtitle}
		    	</p>
            )}
			{props.children}
		</div>
	);
};

````

more complex condition:

````
type MaincardProps = {
	title: ComponentChildren
	count: number
}

export const Maincard = (props: MaincardProps) => {
	const subtitlePart = props.count > 10
		? (
			<p className="title is-6 mb-1">
				{props.subtitle}
			</p>
		)
		: undefined;

	return (
		<div>
            <p className="title is-4 mb-1">{props.title}</p>
			{subtitlePart}
			{props.children}
		</div>
	);
};

````

| Case             | Best Pattern     |
| ---------------- | ---------------- |
| simple show/hide | `&&`             |
| needs else       | `?:`             |
| complex logic    | `if` outside JSX |
