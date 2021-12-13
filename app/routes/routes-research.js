const express = require('express')
const router = express.Router()
const fs = require('fs-extra') // needed to import the json data
const path = require("path")

// Load JSON data from file ----------------------------------------------------
function loadJSONFromFile(fileName, path = 'app/data/') {
    let jsonFile = fs.readFileSync(path + fileName)
    return JSON.parse(jsonFile) // Return JSON as object
}

// INDEX PAGE (to update when URL changes)
router.get('/index-handover', function (req, res) {

    // calculate number of hub menu links
    let hubmenuamount = req.session.data.hubmenu.length;

    console.log('Menu links total is: ' + hubmenuamount)

    // create some empty arrays that we 'll pass into nunjucts
    let hubmenu = []
    let hubmenutitles = []
    let hubmenuURLs = []
    let hubmenuIDs = []

    // loop though the links and populate the arrays
    for (i = 0; i < hubmenuamount; i++) {
        hubmenu[i] = req.session.data.hubmenu[i]
    }
    for (i = 0; i < hubmenuamount; i++) {
        hubmenutitles[i] = req.session.data.hubmenu[i].title
    }
    for (i = 0; i < hubmenuamount; i++) {
        hubmenuURLs[i] = req.session.data.hubmenu[i].url
    }
    for (i = 0; i < hubmenuamount; i++) {
        hubmenuIDs[i] = req.session.data.hubmenu[i].id
    }

    //return these
    return res.render('index-handover', {
        'hubmenuamount': hubmenuamount,
        'hubmenu': hubmenu,
        'hubmenutitles': hubmenutitles,
        'hubmenuURLs': hubmenuURLs,
        'hubmenuIDs': hubmenuIDs

    })
})

// PEOPLE  
router.get('/people', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.peoplemenu.length;

    let thispage = req.session.data.hubmenu[1].id - 2;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.peoplemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.peoplemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.peoplemenu[i].anchor
    }

    //return these
    return res.render('people/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// PROBLEM  
router.get('/problem', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.problemmenu.length;

    let thispage = req.session.data.hubmenu[0].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.problemmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.problemmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.problemmenu[i].anchor
    }

    //return these
    return res.render('problem/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// DATA
router.get('/data', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.datamenu.length;

    let thispage = req.session.data.hubmenu[2].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.datamenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.datamenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.datamenu[i].anchor
    }

    //return these
    return res.render('data/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// USER RESEARCH
router.get('/user-research', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.hubmenu[1].id;

    // calculate number of in page menu links
    let menusections = req.session.data.userresearchmenu.length;

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let names = []
    let fids = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.userresearchmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userresearchmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userresearchmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('user-research/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage
    })
})

// SERVICE USER RESEARCH
router.get('/service-research', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[4].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('service-research/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// GLOSSARY
router.get('/glossary', function (req, res) {

    let thispage = req.session.data.hubmenu[5].id;

    let pagemenu = []

    //return these
    return res.render('glossary/index', {
        'pagemenu': pagemenu,
        'thispage': thispage

    })
})

// PROTOTYPES
router.get('/prototypes', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[7].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('prototypes/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// PILLARS
router.get('/pillars', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[10].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('pillars/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// PHASE 3
router.get('/phase-3', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[3].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('phase-3/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// PHASE 3
router.get('/case-study', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[6].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.prototypemenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.prototypemenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.prototypemenu[i].anchor
    }

    //return these
    return res.render('case-study/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage


    })
})

// FEATURES INDEX PAGE
router.get('/features', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // calculate number of in page menu links
    let menusections = req.session.data.featuresmenu.length;

    let thispage = req.session.data.hubmenu[8].id;

    // create some empty arrays that we 'll pass into nunjucts
    let names = []
    let categories = []
    let category = []
    let fids = []
    let pagemenu = []
    let featuresmenu = []
    let features = []
    let titles = []
    let anchors = []
    let priorities = []

    // loop though the features and populate the arrays
    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        categories[i] = req.session.data.rdd.features[i].category
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
        priorities[i] = req.session.data.rdd.features[i].priority
    }
    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.featuresmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.featuresmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.featuresmenu[i].anchor
    }

    //return these
    return res.render('features/index', {
        'featuresmenu': featuresmenu,
        'featurestotal': featurestotal,
        'features': features,
        'fids': fids,
        'categories': categories,
        'category': category,
        'priorities': priorities,
        'names': names,
        'pagemenu': pagemenu,
        'titles': titles,
        'anchors': anchors,
        'menusections': menusections,
        'thispage': thispage
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/01', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 1

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/01', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/02', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 2

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/02', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/03', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 3

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/03', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/04', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 4

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/04', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/05', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 5

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/05', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/06', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 6

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/06', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/07', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 7

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/07', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/08', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 8

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/08', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/09', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 9

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/09', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/10', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 10

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/10', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/11', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 11

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/11', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/12', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 12

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/12', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/13', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 13

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/13', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/14', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 14

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/14', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/15', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 15

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/15', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/16', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 16

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/16', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/17', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 17

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/17', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/18', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 18

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/18', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/19', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 19

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/19', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/20', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 20

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/20', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/21', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 21

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/21', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/22', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 22

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/22', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/23', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 23

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/23', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/24', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 24

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/24', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/25', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 25

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/25', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/26', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 26

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/26', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/27', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 27

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/27', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/28', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 28

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/28', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/29', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 29

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/29', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/30', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 30

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/30', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/31', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 31

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/31', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/32', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 32

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/32', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

// FEATURE TEMPLATE - UPDATE URLS AND INDEX TO MATCH FEATURE ID
router.get('/features/33', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }
    // this index needs match the feature ID
    let index = 33

    let features = req.session.data.features;

    // grab the items we need to display and make the form work
    let fid = req.session.data.rdd.features[index].fid
    let name = req.session.data.rdd.features[index].name
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showvideo = req.session.data.rdd.features[index].showvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures

    let total = req.session.data.rdd.features.length

    return res.render('features/33', {
        'fid': fid,
        'name': name,
        'category': category,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showvideo': showvideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures
    })
})

module.exports = router
