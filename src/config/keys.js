export default {
  port: process.env.PORT || 3000, 
  DB: {
    URI: process.env.NAME_DB || 'node_postgresql_rest_api',
    USER: process.env.USER_DB || 'postgres',
    PASSWORD: process.env.PASSWORD_DB || 'Br1tney$2='
  }
}