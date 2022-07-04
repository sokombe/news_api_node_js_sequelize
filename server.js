// we import express(the simple way to use nodejs) and cors to avoid conflit between ports
const express = require('express')
const cors = require('cors')

// we put express in a variable to use that properly
const app = express()

var corOptions = {
    origin: '*'
}



// midleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))



// routers
const router_article = require('./routes/articleRoutes.js')
app.use('/api/articles', router_article)

const router_category = require('./routes/categoryRoutes.js')
app.use('/api/categories', router_category)

const router_comment = require('./routes/commentRoutes.js')
app.use('/api/comments', router_comment)

const router_user = require('./routes/userRoutes.js')
app.use('/api/users', router_user)

// end of routes

// testing api
app.get('/NewsApi', (req, res) => {
   res.send("Bienvenu(e) dans notre Api!!! ")
})

// port
const PORT = process.env.PORT || 5000

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})