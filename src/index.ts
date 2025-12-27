import { Hono } from 'hono'
import {hello_html_init} from "./hello-html";
import {html} from "hono/html";
import {hello_jsx_init} from "./hello-jsx";

const app = new Hono()

app.get('/', (c) => {
  return c.html(
      html`<!doctype html>
      <ul>
        <li><a href="/hello/html" target="_blank">Hello HTML</a> </li>
        <li><a href="/hellojsx/jsx" target="_blank">Hello JSX</a> </li>
      </ul>
      `
  )
})
hello_html_init(app);
hello_jsx_init(app);

export default app

