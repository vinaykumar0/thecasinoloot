const express = require('express')
const { uks, uss, auss, frenchs, nondeposit, blogs, getAllData } = require('../controller/dataController')
const { ukById, usById, ausById, frenchById, ndById, blogById } = require('../controller/byIdController')
const router = express.Router()

router.get('/uk', uks)
router.get('/us', uss)
router.get('/aus', auss)
router.get('/french', frenchs)
router.get('/nd', nondeposit)
router.get('/blog', blogs)
router.get('/uk/:id', ukById)
router.get('/us/:id', usById)
router.get('/aus/:id', ausById)
router.get('/french/:id', frenchById)
router.get('/nd/:id', ndById)
router.get('/blog/:id', blogById)
router.get('/all',getAllData)

module.exports=router