/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

    features: {
        "01": 'Suggested eligibility',
        "02": 'Service recommendations',
        "03": "Dashboard",
        "04": "Curated content",
        "05": "Legacy data",
        "06": "Trusted data",
        "07": "Notifications",
        "08": "Global push",
        "09": "Profile completion",
        "10": "Global consent &amp; personalisation permissions",
        "11": "Delete your data",
        "12": "External data",
        "13": "Consent management",
        "14": "Edit details in a service journey",
        "15": "Auto-transactions",
        "16": "Derived data",
        "17": "Audit trail / activity log",
        "18": "Saved documents",
        "19": "Fixed vs editable data",
        "20": "Shared information",
        "21": "Management of data items",
        "22": "Personalised navigation",
        "23": "Progress indication",
        "24": "Reminders",
        "25": "Uses of data",
        "26": "Data naming conventions",
        "27": "Forecasting",
        "28": "GOV.UK preferences used for services",
        "29": "Service data used to personalise content",
        "33": "Store card and manage recurring payment"
    },
    needs: {
        needlabel1: 'Get everything I’m eligible for',
        needlabel2: 'Avoid the stress of paperwork and admin',
        needlabel3: 'Avoid the burden of supplying proof',
        needlabel4: 'Save time',
        needlabel5: 'Avoid phoning the service',
        needlabel6: 'Feel safe and secure online',
        needlabel7: 'Feel confident in the way my data is being used'
    },
    valuetoservice: {
        valuetoservicelabel1: 'Not valuable',
        valuetoservicelabel2: 'Indifferent',
        valuetoservicelabel3: 'Somewhat valuable',
        valuetoservicelabel4: 'Valuable'
    }
}
