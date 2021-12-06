const express = require('express')
const router = express.Router()
const fs = require('fs-extra') // needed to import the json data
const path = require("path")

// Load JSON data from file ----------------------------------------------------
function loadJSONFromFile(fileName, path = 'app/data/') {
    let jsonFile = fs.readFileSync(path + fileName)
    return JSON.parse(jsonFile) // Return JSON as object
}

// pass data to feature page
router.get('/research/features/01', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 1

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let need1 = req.session.data.rdd.features[index].need1
    let need2 = req.session.data.rdd.features[index].need2
    let need3 = req.session.data.rdd.features[index].need3
    let need4 = req.session.data.rdd.features[index].need4
    let need5 = req.session.data.rdd.features[index].need5
    let need6 = req.session.data.rdd.features[index].need6
    let need7 = req.session.data.rdd.features[index].need7
    let value = req.session.data.rdd.features[index].valueservice
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let trello = req.session.data.rdd.features[index].trellolink

    let total = req.session.data.rdd.features.length

    return res.render('research/features/01', {
        'fid': fid,
        'name': name,
        'category': category,
        'need1': need1,
        'need2': need2,
        'need3': need3,
        'need4': need4,
        'need5': need5,
        'need6': need6,
        'need7': need7,
        'value': value,
        'showuser': showuser,
        'showservice': showservice,
        'trello': trello,
        'total': total
    })
})

// pass data to feature page
router.get('/research/index', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 2

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let need1 = req.session.data.rdd.features[index].need1
    let need2 = req.session.data.rdd.features[index].need2
    let need3 = req.session.data.rdd.features[index].need3
    let need4 = req.session.data.rdd.features[index].need4
    let need5 = req.session.data.rdd.features[index].need5
    let need6 = req.session.data.rdd.features[index].need6
    let need7 = req.session.data.rdd.features[index].need7
    let value = req.session.data.rdd.features[index].valueservice
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let trello = req.session.data.rdd.features[index].trellolink

    let total = req.session.data.rdd.features.length

    return res.render('research/features/02', {
        'fid': fid,
        'name': name,
        'category': category,
        'need1': need1,
        'need2': need2,
        'need3': need3,
        'need4': need4,
        'need5': need5,
        'need6': need6,
        'need7': need7,
        'value': value,
        'showuser': showuser,
        'showservice': showservice,
        'trello': trello,
        'total': total
    })
})

module.exports = router
