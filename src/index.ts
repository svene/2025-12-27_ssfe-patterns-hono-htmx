import { Hono } from 'hono'
import { html } from "hono/html"

const app = new Hono()

app.get('/', (c) => {
  return c.html('Hello Hono!')
})

app.get('/hello/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
      html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})

export default app
