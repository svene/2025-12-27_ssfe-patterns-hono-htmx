import { Hono } from 'hono'
import {html} from "hono/html";
import {m01_init, m01_menu} from "./m01html/m01";
import {m00_init, m00_menu} from "./m00hello/m00";

const app = new Hono()

app.get('/', (c) => {
  return c.html(
      html`<!doctype html>
      ${m00_menu()}
      ${m01_menu()}
      <h1>JSX</h1>
      `
  )
})
m00_init(app);
m01_init(app);

export default app

