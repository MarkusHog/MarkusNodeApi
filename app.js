const { json } = require("body-parser")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const https = require("https")

const instrument = {instruments: [{"name": "Guitarr", "kind": "string instrument"},
{"name": "piano", "kind": "plingPlong"},
{"name": "violing", "kind": "Stroke Instument"}]}

app.get("/joke", (req, res) =>{
    https.get("https://api.chucknorris.io/jokes/random", (response) => {
        response.on("data", (data) =>{
            res.send(JSON.parse(data))
        })
    }).on("error", (err) => {
        console.log("There was an error " + err.message)
    })
})

app.get("/instruments", (req, res) => {
    res.send(instrument)
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
} )

app.listen(PORT, ()=> {
    console.log("Listening to port " + PORT)
})

