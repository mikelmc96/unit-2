const Subject= require('../models/Subject')
const Topics= require("../models/Topics")


const itemsController = {

    index: (req, res) => {
        Topics.find().then(subjects => {
            res.render('index', {subjects})
        })
    },
}

module.exports= itemsController