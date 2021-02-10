import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
  res.json({
    msg: "Welcome a REST API!"
  })
})

export default app