const express = require('express')
const router = express.Router()


//PHASE 2 ROUND 5 ROUTES
// childcare calc account logic
router.post('/phase-2-round-5/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-5/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-5/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-5/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/phase-2-round-5/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-5/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-5/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-5/universal-credit/name')
    }
})

// replace passport account logic
router.post('/phase-2-round-5/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-5/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-5/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-5/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/phase-2-round-5/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-5/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-5/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-5/account/check-account-enter-email')
    }
})

// sign-in-to-resume.html [account check]
router.post('/phase-2-round-5/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-5/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-5/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-5/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/phase-2-round-5/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-5/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/phase-2-round-5/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-5/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/phase-2-round-5/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-5/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/phase-2-round-5/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-5/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/phase-2-round-5/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-5/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/phase-2-round-5/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-5/account/account-not-found')
        }
    }
})

// round 2 Childcare calc add additional child 1 
// child-1-details.html
router.post('/phase-2-round-5/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/phase-2-round-5/childcare-calculator/child-2-details')
    } else {
        res.redirect('/phase-2-round-5/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc add additional child 2 
// child-2-details.html
router.post('/phase-2-round-5/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/phase-2-round-5/childcare-calculator/child-3-details')
    } else {
        res.redirect('/phase-2-round-5/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc add additional child 3 
// child-3-details.html
router.post('/phase-2-round-5/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/phase-2-round-5/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/phase-2-round-5/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/phase-2-round-5/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/phase-2-round-5/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/phase-2-round-5/childcare-calculator/are-you-in-paid-work')
    }
})

// round 2 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/phase-2-round-5/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-5/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/phase-2-round-5/childcare-calculator/parent-work-hours')
    }
})

// round 2 UC employment status check
// employment-status.html
router.post('/phase-2-round-5/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-5/universal-credit/childcare-provider')
    } else {
        res.redirect('/phase-2-round-5/universal-credit/parent-work-hours')
    }
})

module.exports = router
