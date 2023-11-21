const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.sendFile('/public/index.html', {root: __dirname});
})
app.get('/style.css', (req, resC) => {
    resC.sendFile('/public/style.css', {root: __dirname});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.use(express.static(__dirname));