import app from './server/config/server.js'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is litening on port ${port}`)
})
