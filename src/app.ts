import express from 'express'
import { Request, Response } from 'express'
import bmi from './bmi'

const app = express()

// TODO implement me :)
const port = 3001

app.get('/bmi', (req: Request, res: Response) => {
  const wieght = parseFloat(req.params.wieght)
  const weightUnit = parseFloat(req.params.weightUnit)
  const height = parseFloat(req.params.height)
  const heightUnit = parseFloat(req.params.heightUnit)

  res.send(bmi())
})
app.post('/bmi', (req: Request, res: Response) => {
  const wieght = parseFloat(req.body.wieght)
  const weightUnit = parseFloat(req.body.weightUnit)
  const height = parseFloat(req.body.height)
  const heightUnit = parseFloat(req.body.heightUnit)
  res.send(bmi())
})

export default app
