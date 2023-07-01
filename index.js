const express = require("express")
const router = require("./router")
require('dotenv').config();

const app = express()

app.use(express.json())

app.use("/api/v1/",router)



app.listen(6000,()=>console.log("the server is happy now ^__^ !! "))