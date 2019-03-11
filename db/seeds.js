 const Subject = require("../models/Subject")
 const Topics = require("../models/Topics")
 const Sets= require("../models/Sets")


 Subject.deleteMany().then(() => {
    return Topics.deleteMany()
    })
        .then(()=> {
        return Subject.create({
            name: "Math",
        })
    })

        .then(() =>{
        return Subject.create({
            name:"Science"
        })
    })

        .then(() =>{
        return Subject.create({
            name:"Engineer"
        })
    })

        .then((Math) => {
        const mathm1 = Topics.create({
            name: "algebra",
            category: "Math",
            mathSubs: [algebra]
        })

    })
        .then((Math) => {
            const Mathm2 = Topics.create({
                name: "geometry",
                category: "Math",
                mathSubs: [geometry]
            })
        })

            .then((Science) => {
                const sci1 = Topics.create({
                    name: "physics",
                    category: "Science",
                    scienceSubs: [physics]
                })
            })

            .then((Science) => {
            const sci2 = Topics.create({
            name: "Chemistry",
            category: "Science",
            scienceSubs: [Chemistry]
                })
            })


            .then((Engineering) => {
            const engin1 = Topics.create({
            name: "Software",
            category: "Engineering",
            Engineering: [Software]
                })
            })

            .then((Enginnering) => {
                const Engin2 = Topics.create({
                    name: "Circuits",
                    category: "Engineering",
                    Engineering: [circuits]
                })
            })
            return Promise.all([mathm1, Mathm2, sci1, sci2, engin1, Engin2]).then(()=> {
                math.save()
        })