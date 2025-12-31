import express from 'express'
import apiroutes from "./routes/apiRoutes.js";

const app = express()

app.get('/api', (_req, res) => {
  apiroutes
})
export default app
