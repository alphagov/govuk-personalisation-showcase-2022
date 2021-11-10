const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// childcare calc account logic
router.post('/round-1/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-1/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/round-1/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-1/universal-credit/name')
    }
})

// replace passport account logic
router.post('/round-1/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-1/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/round-1/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-1/account/check-account-enter-email')
    }
})

// round 1 Resume application - NOT USED
// sign-in-to-resume.html [account check]
router.post('/round-1/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-1/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/round-1/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-1/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/round-1/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-1/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/round-1/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-1/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/round-1/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-1/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/round-1/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-1/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/round-1/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-1/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/round-1/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-1/account/account-not-found')
        }
    }
})

// round 1 Childcare calc add additional child 1 
// child-1-details.html
router.post('/round-1/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/round-1/childcare-calculator/child-2-details')
    } else {
        res.redirect('/round-1/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 2 
// child-2-details.html
router.post('/round-1/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/round-1/childcare-calculator/child-3-details')
    } else {
        res.redirect('/round-1/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 3 
// child-3-details.html
router.post('/round-1/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/round-1/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/round-1/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/round-1/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/round-1/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/round-1/childcare-calculator/are-you-in-paid-work')
    }
})


// round 1 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/round-1/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/round-1/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/round-1/childcare-calculator/parent-work-hours')
    }
})

// round 1 UC employment status check
// employment-status.html
router.post('/round-1/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/round-1/universal-credit/childcare-provider')
    } else {
        res.redirect('/round-1/universal-credit/parent-work-hours')
    }
})

//ROUND 2 ROUTES
// childcare calc account logic
router.post('/round-2/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-2/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/round-2/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-2/universal-credit/name')
    }
})

// replace passport account logic
router.post('/round-2/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-2/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/round-2/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-2/account/check-account-enter-email')
    }
})

// round 1 Resume application - NOT USED
// sign-in-to-resume.html [account check]
router.post('/round-2/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-2/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/round-2/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-2/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/round-2/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-2/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/round-2/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-2/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/round-2/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-2/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/round-2/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-2/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/round-2/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-2/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/round-2/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-2/account/account-not-found')
        }
    }
})

// round 1 Childcare calc add additional child 1 
// child-1-details.html
router.post('/round-2/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/round-2/childcare-calculator/child-2-details')
    } else {
        res.redirect('/round-2/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 2 
// child-2-details.html
router.post('/round-2/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/round-2/childcare-calculator/child-3-details')
    } else {
        res.redirect('/round-2/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 3 
// child-3-details.html
router.post('/round-2/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/round-2/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/round-2/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/round-2/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/round-2/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/round-2/childcare-calculator/are-you-in-paid-work')
    }
})


// round 1 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/round-2/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/round-2/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/round-2/childcare-calculator/parent-work-hours')
    }
})

// round 1 UC employment status check
// employment-status.html
router.post('/round-2/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/round-2/universal-credit/childcare-provider')
    } else {
        res.redirect('/round-2/universal-credit/parent-work-hours')
    }
})

//ROUND 3 ROUTES
// childcare calc account logic
router.post('/round-3/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-3/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/round-3/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-3/universal-credit/name')
    }
})

// replace passport account logic
router.post('/round-3/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-3/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/round-3/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/round-3/account/check-account-enter-email')
    }
})

// round 1 Resume application - NOT USED
// sign-in-to-resume.html [account check]
router.post('/round-3/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-3/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/round-3/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-3/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/round-3/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-3/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/round-3/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-3/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/round-3/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-3/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/round-3/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-3/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/round-3/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/round-3/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/round-3/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/round-3/account/account-not-found')
        }
    }
})

// round 1 Childcare calc add additional child 1 
// child-1-details.html
router.post('/round-3/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/round-3/childcare-calculator/child-2-details')
    } else {
        res.redirect('/round-3/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 2 
// child-2-details.html
router.post('/round-3/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/round-3/childcare-calculator/child-3-details')
    } else {
        res.redirect('/round-3/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 3 
// child-3-details.html
router.post('/round-3/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/round-3/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/round-3/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/round-3/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/round-3/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/round-3/childcare-calculator/are-you-in-paid-work')
    }
})


// round 1 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/round-3/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/round-3/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/round-3/childcare-calculator/parent-work-hours')
    }
})

// round 1 UC employment status check
// employment-status.html
router.post('/round-3/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/round-3/universal-credit/childcare-provider')
    } else {
        res.redirect('/round-3/universal-credit/parent-work-hours')
    }
})

//PHASE 2 ROUND 1 ROUTES
// childcare calc account logic
router.post('/phase-2-round-1/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-1/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/phase-2-round-1/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-1/universal-credit/name')
    }
})

// replace passport account logic
router.post('/phase-2-round-1/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-1/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/phase-2-round-1/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-1/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-1/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-1/account/check-account-enter-email')
    }
})

// round 1 Resume application - NOT USED
// sign-in-to-resume.html [account check]
router.post('/phase-2-round-1/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-1/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-1/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-1/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/phase-2-round-1/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-1/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/phase-2-round-1/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-1/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/phase-2-round-1/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-1/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/phase-2-round-1/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-1/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/phase-2-round-1/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-1/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/phase-2-round-1/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-1/account/account-not-found')
        }
    }
})

// round 1 Childcare calc add additional child 1 
// child-1-details.html
router.post('/phase-2-round-1/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/phase-2-round-1/childcare-calculator/child-2-details')
    } else {
        res.redirect('/phase-2-round-1/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 2 
// child-2-details.html
router.post('/phase-2-round-1/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/phase-2-round-1/childcare-calculator/child-3-details')
    } else {
        res.redirect('/phase-2-round-1/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc add additional child 3 
// child-3-details.html
router.post('/phase-2-round-1/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/phase-2-round-1/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/phase-2-round-1/childcare-calculator/childcare-costs')
    }
})

// round 1 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/phase-2-round-1/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/phase-2-round-1/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/phase-2-round-1/childcare-calculator/are-you-in-paid-work')
    }
})


// round 1 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/phase-2-round-1/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-1/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/phase-2-round-1/childcare-calculator/parent-work-hours')
    }
})

// round 1 UC employment status check
// employment-status.html
router.post('/phase-2-round-1/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-1/universal-credit/childcare-provider')
    } else {
        res.redirect('/phase-2-round-1/universal-credit/parent-work-hours')
    }
})

//PHASE 2 ROUND 2 ROUTES
// childcare calc account logic
router.post('/phase-2-round-2/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-2/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/phase-2-round-2/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-2/universal-credit/name')
    }
})

// replace passport account logic
router.post('/phase-2-round-2/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-2/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/phase-2-round-2/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-2/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-2/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-2/account/check-account-enter-email')
    }
})

// round 2 Resume application - NOT USED
// sign-in-to-resume.html [account check]
router.post('/phase-2-round-2/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-2/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-2/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-2/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/phase-2-round-2/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-2/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/phase-2-round-2/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-2/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/phase-2-round-2/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-2/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/phase-2-round-2/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-2/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/phase-2-round-2/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-2/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/phase-2-round-2/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-2/account/account-not-found')
        }
    }
})

// round 2 Childcare calc add additional child 1 
// child-1-details.html
router.post('/phase-2-round-2/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/phase-2-round-2/childcare-calculator/child-2-details')
    } else {
        res.redirect('/phase-2-round-2/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc add additional child 2 
// child-2-details.html
router.post('/phase-2-round-2/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/phase-2-round-2/childcare-calculator/child-3-details')
    } else {
        res.redirect('/phase-2-round-2/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc add additional child 3 
// child-3-details.html
router.post('/phase-2-round-2/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/phase-2-round-2/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/phase-2-round-2/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/phase-2-round-2/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/phase-2-round-2/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/phase-2-round-2/childcare-calculator/are-you-in-paid-work')
    }
})


// round 2 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/phase-2-round-2/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-2/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/phase-2-round-2/childcare-calculator/parent-work-hours')
    }
})

// round 2 UC employment status check
// employment-status.html
router.post('/phase-2-round-2/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-2/universal-credit/childcare-provider')
    } else {
        res.redirect('/phase-2-round-2/universal-credit/parent-work-hours')
    }
})

//PHASE 2 ROUND 3 ROUTES
// childcare calc account logic
router.post('/phase-2-round-3/sign-in-or-create-account-form', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-3/childcare-calculator/what-youll-need')
    }
})

// universal credit account logic
router.post('/phase-2-round-3/sign-in-or-create-account-form-2', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-3/universal-credit/name')
    }
})

// replace passport account logic
router.post('/phase-2-round-3/sign-in-or-create-account-form-4', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-3/replace-your-passport/do-you-live-in-the-uk')
    }
})

// masthead account logic
router.post('/phase-2-round-3/sign-in-or-create-account-form-3', function (req, res) {

    // The content in the "" is the name of the radio button
    var option = req.session.data['signin-create-account-radios']

    // The content in the "" is the value of the radio button
    if (option === 'create-account') {
        // Send user to this page
        res.redirect('/phase-2-round-3/account/create-account-enter-email')
    } else if (option === 'signin') {
        // Or send user to this page
        res.redirect('/phase-2-round-3/account/sign-in')
    } else {
        // Or send user to this page
        res.redirect('/phase-2-round-3/account/check-account-enter-email')
    }
})

// round 2 Resume application - NOT USED
// sign-in-to-resume.html [account check]
router.post('/phase-2-round-3/check-account-resume', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-3/enter-password')
    } else {
        if (signin === "resume") {
            //oldEmail = email
            //req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-3/account-not-found-resume')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-3/check-email')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// create-account-enter-email.html
router.post('/phase-2-round-3/create-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('v5 new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-3/account/enter-password')
    } else {
        if (signin === "resume") {
            res.redirect('/phase-2-round-3/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-3/account/check-email')
        }
    }
})

// Create an Account or Sign in page Sign in route
// sign-in.html
router.post('/phase-2-round-3/check-account-sign-in', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-3/account/enter-password')
    } else {
        if (signin === "signin") {
            res.redirect('/phase-2-round-3/account/account-not-found-sign-in')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-3/account/account-not-found-sign-in')
        }
    }
})

// Create an Account or Sign in page Check if you have a GOV.UK Account route
// check-account-enter-email.html
router.post('/phase-2-round-3/check-account', function (req, res) {
    email = req.session.data['email-address']
    oldEmail = req.session.data['email-address-used'] || ""
    signin = req.session.data['sign-in'] || ""
    console.log('new email is: ' + email)
    console.log('previous email is: ' + oldEmail)
    if (email === oldEmail && email !== '') {
        res.redirect('/phase-2-round-3/account/enter-password')
    } else {
        if (signin === "check") {
            res.redirect('/phase-2-round-3/account/account-not-found')
        } else {
            oldEmail = email
            req.session.data['email-address-used'] = email
            res.redirect('/phase-2-round-3/account/account-not-found')
        }
    }
})

// round 2 Childcare calc add additional child 1 
// child-1-details.html
router.post('/phase-2-round-3/child-1-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild1 = req.session.data['add-child-1']

    if (addchild1 === 'yes') {
        res.redirect('/phase-2-round-3/childcare-calculator/child-2-details')
    } else {
        res.redirect('/phase-2-round-3/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc add additional child 2 
// child-2-details.html
router.post('/phase-2-round-3/child-2-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild2 = req.session.data['add-child-2']

    if (addchild2 === 'yes') {
        res.redirect('/phase-2-round-3/childcare-calculator/child-3-details')
    } else {
        res.redirect('/phase-2-round-3/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc add additional child 3 
// child-3-details.html
router.post('/phase-2-round-3/child-3-add', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const addchild3 = req.session.data['add-child-3']

    if (addchild3 === 'yes') {
        res.redirect('/phase-2-round-3/childcare-calculator/childcare-costs')
    } else {
        res.redirect('/phase-2-round-3/childcare-calculator/childcare-costs')
    }
})

// round 2 Childcare calc live with partner 
// do-you-live-with-partner.html
router.post('/phase-2-round-3/partner-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const partner = req.session.data['partner-check']

    if (partner === 'yes') {
        res.redirect('/phase-2-round-3/childcare-calculator/are-you-in-paid-work')
    } else {
        res.redirect('/phase-2-round-3/childcare-calculator/are-you-in-paid-work')
    }
})


// round 2 Childcare calc are you in paid work
// are-you-in-paid-work.html
router.post('/phase-2-round-3/paid-work-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-3/childcare-calculator/check-your-answers')
    } else {
        res.redirect('/phase-2-round-3/childcare-calculator/parent-work-hours')
    }
})

// round 2 UC employment status check
// employment-status.html
router.post('/phase-2-round-3/employment-status-check', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const empstat = req.session.data['employment-status']

    if (empstat === 'Unemployed') {
        res.redirect('/phase-2-round-3/universal-credit/childcare-provider')
    } else {
        res.redirect('/phase-2-round-3/universal-credit/parent-work-hours')
    }
})

module.exports = router
