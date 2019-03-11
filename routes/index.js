const express= require('express')
const router= express.Router()
const subjectController= require("../controlers/subjectController.js")
const topicController= require("../controlers/topicController.js")

//subject
router.get('/', subjectController.index)


//topics
router.get('/know', topicController.index)
router.get('/new', topicController.new)
router.post('/know', topicController.create)
router.get('/know/:knowId', topicController.show)
router.post('/know/:editId', topicController.edit)
router.post('/know', topicController.update)
router.post('/deleteId', topicController.delete)

module.exports = router;