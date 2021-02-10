import express, {json,urlencoded} from 'express'
import morgan from 'morgan'
import projectRoute from './routes/project.routes'
import taskRoute from './routes/task.routes'

const app = express()

app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({extended: false}))


app.use('/api/project', projectRoute)
app.use('/api/task', taskRoute)

app.get('/', (req,res)=>{
  res.json({
    msg: "Welcome a REST API!"
  })
})

export default app