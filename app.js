const express = require('express')
const { convertTextToMorse, convertMorseToText } = require('./public/script.js')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/morsecode.html')
})

app.post('/convertText', (req, res) => {
    res.send(convertTextToMorse(req.body.text))
})

app.post('/convertMorse', (req, res) => {
    res.send(convertMorseToText(req.body.text))
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})