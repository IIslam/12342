const express = require('express')
const app = express()
console.log('Starting server')


app.use(function (req, res, next) {
    const origin = req.get('origin')
    res.header('Access-Control-Allow-Origin', origin)
    next()
})

app.get('/v1/users', function (req, res, next) {
    const users = [
        { first_name: "John", last_name: "Doe", email: "john.doe@eqt.com" },
        { first_name: "Jane", last_name: "Doe", email: "jane.Doe@eqt.com" },
    ]
    res.status(200).json(users)
})

// Start server
const port = 9090
app.listen(port, () => {
    console.log('🚀 Server is up on port', port)
})