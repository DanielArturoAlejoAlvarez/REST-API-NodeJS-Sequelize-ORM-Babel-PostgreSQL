import app from "./app";
import config from './config/keys'


async function main() {
  await app.listen(config.port, ()=>{
  console.log(`Server running in port: ${config.port}`)
})
}

main()