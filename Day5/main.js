const express = require('express')

const blog = require("./routes/blog")
const shop = require("./routes/shop")

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)

app.get('/', (req, res) => {
    console.log("It's a get request");
    res.send('Welcome to Express and Postman!')
}).post('/', (req, res) => {
    console.log("It's a post request");
    res.send('Welcome to Express Post Request!')
}).put('/', (req, res) => {
    console.log("It's a put request");
    res.send('Welcome to Express Put Request!')            //Chaining of requests
})

app.get('/index', (req, res) => {
    console.log("Hey itt's index");
    // res.send('HEllo! Index World')
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Gopal", "Mohan", "Minku"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})