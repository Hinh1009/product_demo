const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const routes = require('./routes')
// const { readTokenMiddleware, authenticationTokenMiddleware } = require('./modules_products/auth/index')

const port = 9000
require('./connect-mongo')
const app = express()

app.use(bodyParser.json())

app.use(session({
    secret: 'my secret string',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 12 * 1000 } // 12 hours
}))

// app.use(readTokenMiddleware)

// app.get('/not-require-token', (req, res) =>
//     res.send('Success')
// )

// app.get('/require-token',
//     authenticationTokenMiddleware,
//     (req, res) => res.send('Success !')
// )

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", '*');
	res.header('Access-Control-Allow-Credentials', 'true')
	res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
	next();
});

app.get('/test', (req, res) => {
    res.json(req.user)
})

app.use(routes)
app.get('/',(req,res) => res.send('Hello'))

app.use((err, req, res, next) => {
    let message = err.message
    res.status(500)
        .json({
            message: err.message,
            stack: err.stack
        })
        console.log(message)
})

app.listen(port, (err) => {
    console.log(err || `Server opened at port ${port}`)
})