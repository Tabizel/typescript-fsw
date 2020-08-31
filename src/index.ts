import Express from 'express'

const app: Express.Application = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('FEEL THE POWER')
})

app.listen(3000, err => {
  console.log('Agora vai')
})