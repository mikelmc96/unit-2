const Subject = require('../models/Subject.js')
const Topic = require('../models/Topics.js')

const topicController= {
    index: (req, res) => {
        Topic.find()
        .then((topics) => {
            console.log(topics)
            res.render('topics/index', {topics})
        })
    },
    new: (req, res) => {
        res.render('topics/new')
    },
    new2: (req, res) => {
        res.render('new2')
    },
    new3: (req, res) => {
        res.render('new3')
    },
    create: (req, res) => {
        Topic.create(req.body).then(topic => {
            console.log(req.body)
            console.log(topic)
            res.redirect('/know')
        })
    },
    show: (req, res) => {
        Topic.findById(req.params.topicsId).then(topics => {
            console.log(topics)
            res.render('topics/show', {topics})
        })
    },
    edit: (req, res) => {
        topics.findById(req.params.topicsId).then(topics => {
            res.render('topics/edit', {topics})
        })
    },
    update: (req, res) => {
        topic.findByIdAndUpdate(req.params.topicsId, req.body, {new: true}).then((updatedtopics) => {
            res.redirect(`/${req.params.topicsId}`)
        })
    },
    delete: (req, res) => {
        topic.findByIdAndDelete(req.params.topicsId).then(() => {
            console.log(`Deleted subject with the id of ${req.params.topicsId}`)
            res.redirect('/')
        })
    }
}

module.exports= topicController