import config from './config/keys'
import app from "./app";
import "@babel/polyfill"

async function main() {
  await app.listen(config.port, ()=>{
  console.log(`Server running in port: ${config.port}`)
})
}

main()