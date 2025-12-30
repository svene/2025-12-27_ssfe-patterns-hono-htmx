use html snippets in JSX:

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
