import { Hono } from 'hono'
import {hello_html_init} from "./m00hello/hello-html";
import {html} from "hono/html";
import {hello_jsx_init} from "./m00hello/hello-jsx";
import {M01D01, m01d01_init} from "./m01html/m01d01";

const app = new Hono()

app.get('/', (c) => {
  return c.html(
      html`<!doctype html>
      <h1>First Steps</h1>
      <ul>
        <li><a href="/hello/html" target="_blank">Hello HTML</a> </li>
        <li><a href="/hellojsx/jsx" target="_blank">Hello JSX</a> </li>
      </ul>
      <h1>HTML Helper</h1>
      <ul>
        <li><a href="${M01D01.URL}" target="_blank">Hello HTML</a> </li>
      </ul>
      <h1>JSX</h1>
      <ul>
          <li><a href="${M01D01.URL}" target="_blank">Hello JSX</a> </li>
      </ul>
      `
  )
})
hello_html_init(app);
hello_jsx_init(app);
m01d01_init(app);

export default app

