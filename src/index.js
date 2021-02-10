import app from "./app";
import config from './config/keys'

app.listen(config.port, ()=>{
  console.log(`Server running in port: ${config.port}`)
})