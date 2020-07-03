const express = require('express')
const router = new express.Router()

const authHandlers = require('./modules_products/auth')
const productHandlers = require('./modules_products/product')
const categoryHandler = require('./modules_products/category')
// router.get(`/api/product`,(req,res) => {
//     res.json([1,2,3])
// })
router.post('/api/auth/sign-up', authHandlers.signUp)

router.post('/api/auth/sign-in', authHandlers.signIn)
//dev only
// router.get('/api/auth/get-users',authHandlers.findAll)
// router.delete('/api/auth/:id', authHandlers.deleteAll)

router.get('/api/product', productHandlers.findMany)
router.get('/api/productasc', productHandlers.findManySortAsc)
router.get('/api/productdesc', productHandlers.findManySortDesc)

router.get('/api/product/:id', productHandlers.findOne)

router.post('/api/product',
    // authHandlers.authenticationTokenMiddleware,
    productHandlers.create)

router.put('/api/product',
    // authHandlers.authenticationTokenMiddleware,
    productHandlers.update)

router.delete('/api/product/:id',
    // authHandlers.authenticationTokenMiddleware,
    productHandlers.delete)

//category
router.get('/api/category', categoryHandler.findMany)

router.get('/api/category:id', categoryHandler.findOne)

router.post('/api/category',
    // authHandlers.authenticationTokenMiddleware,
    categoryHandler.create)

router.put('/api/category',
    // authHandlers.authenticationTokenMiddleware,
    categoryHandler.update)

router.delete('/api/category:id',
    // authHandlers.authenticationTokenMiddleware,
    categoryHandler.delete)




module.exports = router