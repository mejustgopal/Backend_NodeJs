const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let title = "my first ejs page"
    let sitename = "Adidas"
    let slogan = "Impossible is nothing"
    let arr = [1, 2, 3, 4, 5]
    res.render("index", { sitename: sitename, slogan: slogan, arr: arr , title: title })
    // res.render("index", { sitename: sitename, slogan: slogan })
    // res.sendFile("templates/index.html", { root: __dirname })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas Why and When"
    let blogContent = "Adidas is a leading sportswear brand known for its innovative designs and commitment to quality. The company was founded in 1949 by Adolf Dassler, and it has since become one of the most recognizable names in the industry. Adidas products are designed for athletes and casual wearers alike, offering a blend of style and performance."
    res.render("blogppost", { blogTitle: blogTitle, blogContent: blogContent })
    // res.sendFile("templates/index.html", { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
