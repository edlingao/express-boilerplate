import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import helment from 'helmet'
import Main from './controllers/main.js'

const mainRoutes = new Main()
const app = express()
const __dirname = path.resolve(process.cwd(), '.')
const port = 8080

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

app.use(express.json())
app.use(express.static(`${__dirname}/dist`))
app.use(helment())

app.get('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Allow', 'GET')
  next()
})

app.use('/', mainRoutes.sayHello)

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})