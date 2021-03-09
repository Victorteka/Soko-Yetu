import { config } from "dotenv"
import app from "./app"


config()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

export default app