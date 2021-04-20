import express from "express";
const app = express();

import "./database";
import {routes} from "./routes"

app.use(express.json())
app.use(routes)

app.get("/", (request, response) => {
 return response.send("Olá NLW5!")
})

app.listen(3333, () => console.log('Server is running on port 3333'));