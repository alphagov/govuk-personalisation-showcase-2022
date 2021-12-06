const express = require('express')
const router = express.Router()
const fs = require('fs-extra') // needed to import the json data
const path = require("path")

// Load JSON data from file ----------------------------------------------------
function loadJSONFromFile(fileName, path = 'app/data/') {
    let jsonFile = fs.readFileSync(path + fileName)
    return JSON.parse(jsonFile) // Return JSON as object
}

// UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/research/', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let fid = req.session.data.rdd.features.fid
    let name = req.session.data.rdd.features.name

    let total = req.session.data.rdd.features.length

    return res.render('research/index', {
        'total': total
    })
})

// UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/research/features/', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let total = req.session.data.rdd.features.length

    return res.render('research/features/index', {
        'total': total
    })
})

// UPDATE URLS AND INDEX TO MATCH FEATURE ID
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
    let userneeds = req.session.data.rdd.features[index].userneeds
    let value = req.session.data.rdd.features[index].valueservice
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisk = req.session.data.rdd.features[index].showrisk
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let trello = req.session.data.rdd.features[index].trellolink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('research/features/01', {
        'fid': fid,
        'name': name,
        'category': category,
        'userneeds': userneeds,
        'value': value,
        'showuser': showuser,
        'showservice': showservice,
        'showrisk': showrisk,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'trello': trello,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})


module.exports = router
