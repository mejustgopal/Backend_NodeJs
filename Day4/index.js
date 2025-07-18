const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us')
})

app.get('/gopal', (req, res) => {
    res.send('Gopal')
})

app.get('/blog', (req, res) => {
    res.send('Blog 😎')
})

app.get('/:man', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    
    res.send(`Hello ${req.params.man}`)
})

app.get('/blog/:slug/:second', (req, res) => {
    res.send(`hello ${req.params.slug} and hello ${req.params.second}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})