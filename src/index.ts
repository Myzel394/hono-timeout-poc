import { Hono } from 'hono'
import { timeout } from 'hono/timeout'

const app = new Hono()

app.use("/", timeout(30_000))
app.get('/', async (c) => {
  await new Promise((resolve) => setTimeout(resolve, 15_000))
  
  return c.text('Hello Hono!')
})

export default app
