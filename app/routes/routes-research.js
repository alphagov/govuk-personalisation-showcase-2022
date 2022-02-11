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
router.get('/index', function (req, res) {

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
    return res.render('index', {
        'hubmenuamount': hubmenuamount,
        'hubmenu': hubmenu,
        'hubmenutitles': hubmenutitles,
        'hubmenuURLs': hubmenuURLs,
        'hubmenuIDs': hubmenuIDs

    })
})

// INDEX PAGE (to update when URL changes)
router.get('/', function (req, res) {

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
    return res.render('index.html', {
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

    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;

    let thispage = req.session.data.hubmenu[6].id;
    let done = true;
    let teamsnumber = req.session.data.teams.length;
    let membersnumber = []
    let teams = []
    let teamnames = []
    let members = []
    let roles = []
    let membernames = []
    let emails = []

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
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[i].members.length
    }
    for (i = 0; i < teamsnumber; i++) {
        members[i] = req.session.data.teams[i].members
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }


    //return these
    return res.render('people/index', {
        'pagemenu': pagemenu,
        'done': done,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage,
        'teams': teams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'teamnames': teamnames,
        'roles': roles,
        'membernames': membernames,
        'emails': emails,
        'members': members

    })
})

// PROBLEM  
router.get('/problem', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.problemmenu.length;

    let thispage = req.session.data.hubmenu[0].id - 2;
    let done = true;

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
        'done': done,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage

    })
})

// Q AND A  
router.get('/q-and-a', function (req, res) {

    let thispage = req.session.data.hubmenu[7].id;

    //return these
    return res.render('q-and-a/index', {
        'thispage': thispage

    })
})

// ENGAGEMENT
router.get('/engagement', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.hubmenu[10].id;

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    let membersnumber = []
    let teams = []
    let features = []
    let teamnames = []
    let focus = []
    let members = []
    let roles = []
    let urls = []
    let needs = []
    let membernames = []
    let emails = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[i].members.length
    }
    for (i = 0; i < teamsnumber; i++) {
        members[i] = req.session.data.teams[i].members
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < teamsnumber; i++) {
        focus[i] = req.session.data.teams[i].focus
    }
    for (i = 0; i < teamsnumber; i++) {
        urls[i] = req.session.data.teams[i].id + 1
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }

    //return these
    return res.render('engagement/index', {
        'thispage': thispage,
        'teams': teams,
        'urls': urls,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'teamnames': teamnames,
        'focus': focus,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'features': features,
        'featurestotal': featurestotal,
        'membernames': membernames,
        'emails': emails,
        'members': members

    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/01', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 00
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/01', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/02', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 01
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/02', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/03', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 02
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    // calculate number of recommendations
    let rectotal = req.session.data.recommendations.length;
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let rectitles = []
    let recommendations = req.session.data.recommendations
    let rids = []
    let recteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < rectotal; i++) {
        rids[i] = req.session.data.recommendations[i].rid
        rectitles[i] = req.session.data.recommendations[i].title
        recteams[i] = req.session.data.recommendations[i].teams
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/03', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/04', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 03
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;
    let recommendations = req.session.data.recommendations

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }

    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/04', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/05', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 04
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/05', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/06', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 05
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/06', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/07', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 06
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/07', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/08', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 07
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;
    let recommendations = req.session.data.recommendations

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }

    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/08', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/09', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 08
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/09', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/10', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 09
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/10', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/11', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 10
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }

    //return these
    return res.render('people/teams/11', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// TEAM TEMPLATE - UPDATE URLS AND INDEX TO MATCH TEAM ID
router.get('/people/teams/12', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let teamindex = 11
    let pageid = ("0" + (req.session.data.teams[teamindex].id + 1)).slice(-2)

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;
    // calculate number of roles
    let rolesnumber = req.session.data.roles.length;
    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length
    // calculate number of end user insight links
    let userinsighttotal = req.session.data.userinsightsmenu.length;
    let recommendations = req.session.data.recommendations
    // calculate number of service insight links
    let serviceinsighttotal = req.session.data.serviceinsightsmenu.length;
    // calculate number of data insight links
    let datainsighttotal = req.session.data.datainsightsmenu.length;

    let membersnumber = []
    let teams = []
    let features = []
    let featurenames = []
    let fids = []
    let featureteams = []
    let teamnames = []
    let members = req.session.data.teams[teamindex].members
    let roles = []
    let needs = []
    let membernames = []
    let emails = []
    let userinsights = []
    let usertitles = []
    let useranchors = []
    let userteams = []
    let serviceinsights = []
    let servicetitles = []
    let serviceanchors = []
    let serviceteams = []
    let datainsights = []
    let datatitles = []
    let dataanchors = []
    let datateams = []

    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        featurenames[i] = req.session.data.rdd.features[i].name
        featureteams[i] = req.session.data.rdd.features[i].teams
        fids[i] = req.session.data.rdd.features[i].fid
    }
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    for (i = 0; i < teamsnumber; i++) {
        membersnumber[i] = req.session.data.teams[teamindex].members.length
    }
    for (i = 0; i < rolesnumber; i++) {
        roles[i] = req.session.data.roles[i]
    }
    for (i = 0; i < membersnumber; i++) {
        emails[i] = req.session.data.teams.members[i].email
    }
    for (i = 0; i < membersnumber; i++) {
        membernames[i] = req.session.data.teams.members[i].name
    }
    for (i = 0; i < userinsighttotal; i++) {
        userinsights[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < userinsighttotal; i++) {
        usertitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < userinsighttotal; i++) {
        useranchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < userinsighttotal; i++) {
        userteams[i] = req.session.data.userinsightsmenu[i].teams
    }

    for (i = 0; i < serviceinsighttotal; i++) {
        serviceinsights[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        servicetitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < serviceinsighttotal; i++) {
        serviceteams[i] = req.session.data.serviceinsightsmenu[i].teams
    }

    for (i = 0; i < datainsighttotal; i++) {
        datainsights[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < datainsighttotal; i++) {
        datatitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < datainsighttotal; i++) {
        dataanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < datainsighttotal; i++) {
        datateams[i] = req.session.data.datainsightsmenu[i].teams
    }
    //return these
    return res.render('people/teams/12', {
        'teams': teams,
        'pageid': pageid,
        'userinsights': userinsights,
        'recommendations': recommendations,
        'usertitles': usertitles,
        'useranchors': useranchors,
        'userteams': userteams,
        'serviceinsights': serviceinsights,
        'servicetitles': servicetitles,
        'serviceanchors': serviceanchors,
        'serviceteams': serviceteams,
        'datainsights': datainsights,
        'datatitles': datatitles,
        'dataanchors': dataanchors,
        'datateams': datateams,
        'teamsnumber': teamsnumber,
        'membersnumber': membersnumber,
        'featurenames': featurenames,
        'featureteams': featureteams,
        'fids': fids,
        'teamnames': teamnames,
        'teamindex': teamindex,
        'userinsighttotal': userinsighttotal,
        'roles': roles,
        'rolesnumber': rolesnumber,
        'featurestotal': featurestotal,
        'features': features,
        'membernames': membernames,
        'emails': emails,
        'members': members
    })
})

// DATA
router.get('/data', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.datamenu.length;

    let thispage = req.session.data.hubmenu[1].id;

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

    let thispage = req.session.data.hubmenu[8].id;

    // calculate number of in page menu links
    let menusections = req.session.data.userresearchmenu.length;
    let approachmenusections = req.session.data.userapproachmenu.length;
    let summarymenusections = req.session.data.usersummarymenu.length;
    let insightsmenusections = req.session.data.userinsightsmenu.length;
    let recommendationsmenusections = req.session.data.userrecommendationsmenu.length;

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let approachmenu = []
    let approachtitles = []
    let approachanchors = []
    let summarymenu = []
    let summarytitles = []
    let summaryanchors = []
    let insightsmenu = []
    let insightstitles = []
    let insightsanchors = []
    let recommendationsmenu = []
    let recommendationstitles = []
    let recommendationsanchors = []
    let names = []
    let fids = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.userresearchmenu[i]
    }
    for (i = 0; i < approachmenusections; i++) {
        approachmenu[i] = req.session.data.userapproachmenu[i]
    }
    for (i = 0; i < summarymenusections; i++) {
        summarymenu[i] = req.session.data.usersummarymenu[i]
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightsmenu[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < recommendationsmenusections; i++) {
        recommendationsmenu[i] = req.session.data.userrecommendationsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userresearchmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userresearchmenu[i].anchor
    }
    for (i = 0; i < approachmenusections; i++) {
        approachtitles[i] = req.session.data.userapproachmenu[i].title
    }
    for (i = 0; i < approachmenusections; i++) {
        approachanchors[i] = req.session.data.userapproachmenu[i].anchor
    }
    for (i = 0; i < summarymenusections; i++) {
        summarytitles[i] = req.session.data.usersummarymenu[i].title
    }
    for (i = 0; i < summarymenusections; i++) {
        summaryanchors[i] = req.session.data.usersummarymenu[i].anchor
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightstitles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightsanchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < recommendationsmenusections; i++) {
        recommendationstitles[i] = req.session.data.userrecommendationsmenu[i].title
    }
    for (i = 0; i < recommendationsmenusections; i++) {
        recommendationsanchors[i] = req.session.data.userrecommendationsmenu[i].anchor
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
        'approachmenu': approachmenu,
        'approachmenusections': approachmenusections,
        'approachtitles': approachtitles,
        'approachanchors': approachanchors,
        'summarymenu': summarymenu,
        'summarymenusections': summarymenusections,
        'summarytitles': summarytitles,
        'summaryanchors': summaryanchors,
        'insightsmenu': insightsmenu,
        'insightsmenusections': insightsmenusections,
        'insightstitles': insightstitles,
        'insightsanchors': insightsanchors,
        'recommendationsmenu': recommendationsmenu,
        'recommendationsmenusections': recommendationsmenusections,
        'recommendationstitles': recommendationstitles,
        'recommendationsanchors': recommendationsanchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage
    })
})

// USER RESEARCH approach
router.get('/user-research/approach', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.userresearchmenu[0].title;
    let parent = req.session.data.hubmenu[1].title;
    let parentlink = req.session.data.hubmenu[1].url;
    let nextpage = req.session.data.userresearchmenu[1].title;
    let nextpagelink = req.session.data.userresearchmenu[1].anchor;
    let prevpage = req.session.data.hubmenu[1].title;
    let prevpagelink = req.session.data.hubmenu[1].url;

    console.log('This page is: ' + thispage)


    // calculate number of in page menu links
    let menusections = req.session.data.userapproachmenu.length;

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
        pagemenu[i] = req.session.data.userapproachmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userapproachmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userapproachmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('user-research/approach', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink,
        'nextpage': nextpage,
        'nextpagelink': nextpagelink,
        'prevpage': prevpage,
        'prevpagelink': prevpagelink
    })
})

// USER RESEARCH summary
router.get('/user-research/summary', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.userresearchmenu[1].title;
    let parent = req.session.data.hubmenu[1].title;
    let parentlink = req.session.data.hubmenu[1].url;
    let nextpage = req.session.data.userresearchmenu[2].title;
    let nextpagelink = req.session.data.userresearchmenu[2].anchor;
    let prevpage = req.session.data.userresearchmenu[0].title;
    let prevpagelink = req.session.data.userresearchmenu[0].anchor;

    console.log('This page is: ' + thispage)

    // calculate number of in page menu links
    let menusections = req.session.data.usersummarymenu.length;

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
        pagemenu[i] = req.session.data.usersummarymenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.usersummarymenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.usersummarymenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('user-research/summary', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink,
        'nextpage': nextpage,
        'nextpagelink': nextpagelink,
        'prevpage': prevpage,
        'prevpagelink': prevpagelink
    })
})

// USER RESEARCH insights
router.get('/user-research/insights', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.userresearchmenu[1].title;
    let parent = req.session.data.hubmenu[1].title;
    let parentlink = req.session.data.hubmenu[1].url;

    // calculate number of in page menu links
    let menusections = req.session.data.userinsightsmenu.length;

    let featurestotal = req.session.data.rdd.features.length
    let totalneeds = req.session.data.needs.length;
    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let names = []
    let fids = []
    let needs = req.session.data.needs
    let categories = []
    let category = []
    let featuresmenu = []
    let features = []
    let priorities = []
    let impact = []
    let complexity = []
    let value = []
    let teams = []
    let teamnames = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.userinsightsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userinsightsmenu[i].anchor
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userinsightsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        teams[i] = req.session.data.userinsightsmenu[i].teams
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
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
        impact[i] = req.session.data.rdd.features[i].userimpact
        complexity[i] = req.session.data.rdd.features[i].complexityservice
        value[i] = req.session.data.rdd.features[i].valueservice
    }

    //return these
    return res.render('user-research/insights', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'needs': needs,
        'parentlink': parentlink,
        'featuresmenu': featuresmenu,
        'features': features,
        'categories': categories,
        'category': category,
        'priorities': priorities,
        'impact': impact,
        'complexity': complexity,
        'teams': teams,
        'teamnames': teamnames,
        'value': value,
        'thispage': thispage
    })
})

// USER RESEARCH user needs
router.get('/user-research/user-needs', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.hubmenu[2].title;
    let parent = req.session.data.hubmenu[1].title;
    let parentlink = req.session.data.hubmenu[1].url;

    console.log('This page is: ' + thispage)

    // calculate number of in page menu links
    let menusections = req.session.data.userneedsmenu.length;
    let totalneeds = req.session.data.needs.length;

    console.log('Total needs: ' + totalneeds)

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let names = []
    let needs = req.session.data.needs
    let fids = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.userneedsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userneedsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userneedsmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('user-research/user-needs', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'needs': needs,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// USER RESEARCH recommendations
router.get('/user-research/recommendations', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.userresearchmenu[5].title;
    let parent = req.session.data.hubmenu[4].title;
    let parentlink = req.session.data.hubmenu[4].url;

    console.log('This page is: ' + thispage)

    // calculate number of in page menu links
    let menusections = req.session.data.userrecommendationsmenu.length;

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
        pagemenu[i] = req.session.data.userrecommendationsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.userrecommendationsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.userrecommendationsmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('user-research/recommendations', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// SERVICE USER RESEARCH
router.get('/service-research', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.serviceresearchmenu.length;
    let approachmenusections = req.session.data.serviceapproachmenu.length;
    let summarymenusections = req.session.data.servicesummarymenu.length;
    let insightsmenusections = req.session.data.serviceinsightsmenu.length;

    let thispage = req.session.data.hubmenu[0].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let approachmenu = []
    let approachtitles = []
    let approachanchors = []
    let summarymenu = []
    let summarytitles = []
    let summaryanchors = []
    let insightsmenu = []
    let insightstitles = []
    let insightsanchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.serviceresearchmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.serviceresearchmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.serviceresearchmenu[i].anchor
    }
    for (i = 0; i < approachmenusections; i++) {
        approachmenu[i] = req.session.data.serviceapproachmenu[i]
    }
    for (i = 0; i < summarymenusections; i++) {
        summarymenu[i] = req.session.data.servicesummarymenu[i]
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightsmenu[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < approachmenusections; i++) {
        approachtitles[i] = req.session.data.serviceapproachmenu[i].title
    }
    for (i = 0; i < approachmenusections; i++) {
        approachanchors[i] = req.session.data.serviceapproachmenu[i].anchor
    }
    for (i = 0; i < summarymenusections; i++) {
        summarytitles[i] = req.session.data.servicesummarymenu[i].title
    }
    for (i = 0; i < summarymenusections; i++) {
        summaryanchors[i] = req.session.data.servicesummarymenu[i].anchor
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightstitles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightsanchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }

    //return these
    return res.render('service-research/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'approachmenu': approachmenu,
        'approachmenusections': approachmenusections,
        'approachtitles': approachtitles,
        'approachanchors': approachanchors,
        'summarymenu': summarymenu,
        'summarymenusections': summarymenusections,
        'summarytitles': summarytitles,
        'summaryanchors': summaryanchors,
        'insightsmenu': insightsmenu,
        'insightsmenusections': insightsmenusections,
        'insightstitles': insightstitles,
        'insightsanchors': insightsanchors,
        'thispage': thispage
    })
})

// SERVICE USER approach
router.get('/service-research/approach', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.serviceresearchmenu[0].title;
    let parent = req.session.data.hubmenu[2].title;
    let parentlink = req.session.data.hubmenu[2].url;

    console.log('This page is: ' + thispage)


    // calculate number of in page menu links
    let menusections = req.session.data.serviceapproachmenu.length;

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
        pagemenu[i] = req.session.data.serviceapproachmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.serviceapproachmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.serviceapproachmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('service-research/approach', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// SERVICE USER summary
router.get('/service-research/summary', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.serviceresearchmenu[1].title;
    let parent = req.session.data.hubmenu[2].title;
    let parentlink = req.session.data.hubmenu[2].url;

    console.log('This page is: ' + thispage)


    // calculate number of in page menu links
    let menusections = req.session.data.servicesummarymenu.length;

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
        pagemenu[i] = req.session.data.servicesummarymenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.servicesummarymenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.servicesummarymenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('service-research/summary', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// SERVICE USER insights
router.get('/service-research/insights', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.serviceresearchmenu[2].title;
    let parent = req.session.data.hubmenu[2].title;
    let parentlink = req.session.data.hubmenu[2].url;

    console.log('This page is: ' + thispage)


    // calculate number of in page menu links
    let menusections = req.session.data.serviceinsightsmenu.length;

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
        pagemenu[i] = req.session.data.serviceinsightsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.serviceinsightsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.serviceinsightsmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('service-research/insights', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// USER RESEARCH user needs
router.get('/service-research/service-needs', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let parent = req.session.data.hubmenu[2].title;
    let parentlink = req.session.data.hubmenu[2].url;

    //return these
    return res.render('service-research/service-needs', {
        'parent': parent,
        'parentlink': parentlink
    })
})

// SERVICE USER recommendations
router.get('/service-research/recommendations', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.serviceresearchmenu[3].title;
    let parent = req.session.data.hubmenu[3].title;
    let parentlink = req.session.data.hubmenu[3].url;

    console.log('This page is: ' + thispage)

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts

    // loop though the links and populate the arrays


    //return these
    return res.render('service-research/recommendations', {
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// DATA RESEARCH
router.get('/data', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.datamenu.length;
    let approachmenusections = req.session.data.dataapproachmenu.length;
    let summarymenusections = req.session.data.datasummarymenu.length;
    let insightsmenusections = req.session.data.datainsightsmenu.length;

    let thispage = req.session.data.hubmenu[3].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let approachmenu = []
    let approachtitles = []
    let approachanchors = []
    let summarymenu = []
    let summarytitles = []
    let summaryanchors = []
    let insightsmenu = []
    let insightstitles = []
    let insightsanchors = []

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
    for (i = 0; i < approachmenusections; i++) {
        approachmenu[i] = req.session.data.dataapproachmenu[i]
    }
    for (i = 0; i < summarymenusections; i++) {
        summarymenu[i] = req.session.data.datasummarymenu[i]
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightsmenu[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < approachmenusections; i++) {
        approachtitles[i] = req.session.data.dataapproachmenu[i].title
    }
    for (i = 0; i < approachmenusections; i++) {
        approachanchors[i] = req.session.data.dataapproachmenu[i].anchor
    }
    for (i = 0; i < summarymenusections; i++) {
        summarytitles[i] = req.session.data.datasummarymenu[i].title
    }
    for (i = 0; i < summarymenusections; i++) {
        summaryanchors[i] = req.session.data.datasummarymenu[i].anchor
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightstitles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < insightsmenusections; i++) {
        insightsanchors[i] = req.session.data.datainsightsmenu[i].anchor
    }

    //return these
    return res.render('data/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'approachmenu': approachmenu,
        'approachmenusections': approachmenusections,
        'approachtitles': approachtitles,
        'approachanchors': approachanchors,
        'summarymenu': summarymenu,
        'summarymenusections': summarymenusections,
        'summarytitles': summarytitles,
        'summaryanchors': summaryanchors,
        'insightsmenu': insightsmenu,
        'insightsmenusections': insightsmenusections,
        'insightstitles': insightstitles,
        'insightsanchors': insightsanchors,
        'thispage': thispage
    })
})

// DATA approach
router.get('/data/approach', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.datamenu[0].title;
    let parent = req.session.data.hubmenu[3].title;
    let parentlink = req.session.data.hubmenu[3].url;

    console.log('This page is: ' + thispage)


    // calculate number of in page menu links
    let menusections = req.session.data.dataapproachmenu.length;

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
        pagemenu[i] = req.session.data.dataapproachmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.dataapproachmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.dataapproachmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('data/approach', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// DATA summary
router.get('/data/summary', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.datamenu[1].title;
    let parent = req.session.data.hubmenu[3].title;
    let parentlink = req.session.data.hubmenu[3].url;

    console.log('This page is: ' + thispage)


    // calculate number of in page menu links
    let menusections = req.session.data.datasummarymenu.length;

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
        pagemenu[i] = req.session.data.datasummarymenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.datasummarymenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.datasummarymenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('data/summary', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// DATA insights
router.get('/data/insights', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.datamenu[2].title;
    let parent = req.session.data.hubmenu[3].title;
    let parentlink = req.session.data.hubmenu[3].url;

    console.log('This page is: ' + thispage)

    // calculate number of in page menu links
    let menusections = req.session.data.datainsightsmenu.length;

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
        pagemenu[i] = req.session.data.datainsightsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.datainsightsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.datainsightsmenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('data/insights', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// DATA recommendations
router.get('/data/recommendations', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = req.session.data.datamenu[3].title;
    let parent = req.session.data.hubmenu[3].title;
    let parentlink = req.session.data.hubmenu[3].url;

    console.log('This page is: ' + thispage)

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts

    // loop though the links and populate the arrays


    //return these
    return res.render('data/recommendations', {
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
    })
})

// DATA survey
router.get('/data/survey', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    let thispage = []
    let parent = req.session.data.hubmenu[3].title;
    let parentlink = req.session.data.hubmenu[3].url;

    console.log('This page is: ' + thispage)

    // calculate number of in page menu links
    let menusections = req.session.data.datasurveymenu.length;
    let featurestotal = req.session.data.rdd.features.length

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let names = []
    let fids = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.datasurveymenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.datasurveymenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.datasurveymenu[i].anchor
    }
    for (i = 0; i < featurestotal; i++) {
        featurestotal[i] = req.session.data.rdd.features[i]
    }
    for (i = 0; i < featurestotal; i++) {
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
    }

    //return these
    return res.render('data/survey', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'featurestotal': featurestotal,
        'fids': fids,
        'names': names,
        'thispage': thispage,
        'parent': parent,
        'parentlink': parentlink
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

    let thispage = req.session.data.hubmenu[9].id;
    let done = true

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
        'done': done,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'thispage': thispage
    })
})

// RECOMMENDATIONS  
router.get('/recommendations', function (req, res) {

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    // calculate number of in page menu links
    let menusections = req.session.data.recommendationsmenu.length;

    // calculate number of recommendations
    let rectotal = req.session.data.recommendations.length;

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;

    let thispage = req.session.data.hubmenu[3].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []
    let rectitles = []
    let recommendations = req.session.data.recommendations
    let rids = []
    let teams = []
    let teamnames = []
    let recteams = []
    let features = []
    let names = []
    let categories = []
    let category = []
    let fids = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.recommendationsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.recommendationsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.recommendationsmenu[i].anchor
    }
    for (i = 0; i < rectotal; i++) {
        rids[i] = req.session.data.recommendations[i].rid
        rectitles[i] = req.session.data.recommendations[i].title
        recteams[i] = req.session.data.recommendations[i].teams
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }
    // loop though the features and populate the arrays
    for (i = 0; i < featurestotal; i++) {
        features[i] = req.session.data.rdd.features[i]
        names[i] = req.session.data.rdd.features[i].name
        fids[i] = req.session.data.rdd.features[i].fid
        categories[i] = req.session.data.rdd.features[i].category
    }


    //return these
    return res.render('recommendations/index', {
        'pagemenu': pagemenu,
        'menusections': menusections,
        'titles': titles,
        'anchors': anchors,
        'recommendations': recommendations,
        'rectitles': rectitles,
        'recteams': recteams,
        'rids': rids,
        'rectotal': rectotal,
        'teams': teams,
        'teamnames': teamnames,
        'thispage': thispage,
        'features': features,
        'names': names,
        'fids': fids,
        'categories': categories,
        'category': category,
    })
})

// PILLARS
router.get('/pillars', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.pillarsmenu.length;

    let thispage = req.session.data.hubmenu[4].id;

    // create some empty arrays that we 'll pass into nunjucts
    let pagemenu = []
    let titles = []
    let anchors = []

    // loop though the links and populate the arrays
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.pillarsmenu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.pillarsmenu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.pillarsmenu[i].anchor
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

    // pull in JSON data file if someone jumps directly to this page
    if (!req.session.data['rdd']) {
        let idvFile = 'rdd.json'
        let path = 'app/data/'
        req.session.data['rdd'] = loadJSONFromFile(idvFile, path)
    }

    // calculate number of in page menu links
    let menusections = req.session.data.phase3menu.length;

    // calculate number of features
    let featurestotal = req.session.data.rdd.features.length

    let thispage = req.session.data.hubmenu[5].id;

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

    // loop though the links and populate the arrays
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
    for (i = 0; i < menusections; i++) {
        pagemenu[i] = req.session.data.phase3menu[i]
    }
    for (i = 0; i < menusections; i++) {
        titles[i] = req.session.data.phase3menu[i].title
    }
    for (i = 0; i < menusections; i++) {
        anchors[i] = req.session.data.phase3menu[i].anchor
    }
    //return these
    return res.render('phase-3/index', {
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

// CASE STUDY
router.get('/case-study', function (req, res) {

    // calculate number of in page menu links
    let menusections = req.session.data.prototypemenu.length;

    let thispage = req.session.data.hubmenu[9].id;

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

    // calculate number of teams
    let teamsnumber = req.session.data.teams.length;

    // calculate number of in page menu links
    let menusections = req.session.data.featuresmenu.length;

    let thispage = req.session.data.hubmenu[2].id;

    // create some empty arrays that we 'll pass into nunjucts
    let names = []
    let categories = []
    let category = []
    let fids = []
    let pagemenu = []
    let featuresmenu = []
    let featureteams = []
    let features = []
    let titles = []
    let anchors = []
    let priorities = []
    let impact = []
    let complexity = []
    let value = []
    let teams = []
    let teamnames = []

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
        impact[i] = req.session.data.rdd.features[i].userimpact
        complexity[i] = req.session.data.rdd.features[i].complexityservice
        value[i] = req.session.data.rdd.features[i].valueservice
        featureteams[i] = req.session.data.rdd.features[i].teams
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
    for (i = 0; i < teamsnumber; i++) {
        teams[i] = req.session.data.teams[i]
    }
    for (i = 0; i < teamsnumber; i++) {
        teamnames[i] = req.session.data.teams[i].name
    }

    //return these
    return res.render('features/index', {
        'featuresmenu': featuresmenu,
        'featurestotal': featurestotal,
        'features': features,
        'featureteams': featureteams,
        'fids': fids,
        'categories': categories,
        'category': category,
        'priorities': priorities,
        'impact': impact,
        'complexity': complexity,
        'value': value,
        'names': names,
        'pagemenu': pagemenu,
        'titles': titles,
        'anchors': anchors,
        'menusections': menusections,
        'teams': teams,
        'teamnames': teamnames,
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/01', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/02', {
        'fid': fid,
        'name': name,
        'done': done,
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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/03', {
        'fid': fid,
        'name': name,
        'done': done,
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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/04', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'teams': teams,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/05', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/06', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/07', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/08', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/09', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/10', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'teams': teams,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let done = req.session.data.rdd.features[index].done
    let category = req.session.data.rdd.features[index].category
    let priority = req.session.data.rdd.features[index].priority
    let userneeds = req.session.data.rdd.features[index].userneeds
    let impact = req.session.data.rdd.features[index].userimpact
    let confidenceuserimpact = req.session.data.rdd.features[index].confidenceuserimpact
    let value = req.session.data.rdd.features[index].valueservice
    let confidenceservicevalue = req.session.data.rdd.features[index].confidencevalueservice
    let complexityservice = req.session.data.rdd.features[index].complexityservice
    let confidencecomplexityservice = req.session.data.rdd.features[index].confidencecomplexityservice
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/15', {
        'fid': fid,
        'name': name,
        'done': done,
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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

    // if depreciated = true it will add in depreciated banner
    let depreciated = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/25', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'depreciated': depreciated,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

    // if depreciated = true it will add in depreciated banner
    let depreciated = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/26', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'depreciated': depreciated,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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

    // if done = true it will remove in draft banner
    let done = true

    // if depreciated = true it will add in depreciated banner
    let depreciated = true

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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

    let total = req.session.data.rdd.features.length

    return res.render('features/28', {
        'fid': fid,
        'name': name,
        'category': category,
        'done': done,
        'depreciated': depreciated,
        'priority': priority,
        'features': features,
        'userneeds': userneeds,
        'impact': impact,
        'confidenceuserimpact': confidenceuserimpact,
        'value': value,
        'confidenceservicevalue': confidenceservicevalue,
        'complexityservice': complexityservice,
        'confidencecomplexityservice': confidencecomplexityservice,
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'teams': teams,
        'relatedfeatures': relatedfeatures,
        'teams': teams
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
    let showdescvideo = req.session.data.rdd.features[index].showdescvideo
    let showdesc = req.session.data.rdd.features[index].showdesc
    let showuser = req.session.data.rdd.features[index].showuserfindings
    let showservicevideo = req.session.data.rdd.features[index].showservicevideo
    let showservice = req.session.data.rdd.features[index].showservicefindings
    let showrisks = req.session.data.rdd.features[index].showrisks
    let riskcategory = req.session.data.rdd.features[index].riskcategory
    let showrecommendations = req.session.data.rdd.features[index].showrecommendations
    let prototypelink = req.session.data.rdd.features[index].prototypelink
    let relatedfeatures = req.session.data.rdd.features[index].relatedfeatures
    let teams = req.session.data.rdd.features[index].teams

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
        'showdescvideo': showdescvideo,
        'showservicevideo': showservicevideo,
        'showdesc': showdesc,
        'showuser': showuser,
        'showservice': showservice,
        'showrisks': showrisks,
        'riskcategory': riskcategory,
        'showrecommendations': showrecommendations,
        'prototypelink': prototypelink,
        'total': total,
        'relatedfeatures': relatedfeatures,
        'teams': teams
    })
})

module.exports = router
