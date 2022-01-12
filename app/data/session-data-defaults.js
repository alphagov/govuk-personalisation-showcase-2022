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

    indexlink: "/index-handover",
    maintitle: "X-Gov Services",
    highlight: "Key insight(s)",
    example: "Example(s) from research",
    hubmenu: [
        {
            title: "The problem",
            url: "/problem",
            id: 2
    },
        {
            title: "End users",
            url: "/user-research",
            id: 3
    },
        {
            title: "Services",
            url: "/service-research",
            id: 4
    },
        {
            title: "Data",
            url: "/data",
            id: 5
    },
        {
            title: "Features",
            url: "/features",
            id: 6
    },
        {
            title: "Recommendations",
            url: "/recommendations",
            id: 7
    },
        {
            title: "The 3 Pillars",
            url: "/pillars",
            id: 8
    },
        {
            title: "Phase 3",
            url: "/phase-3",
            id: 9
    },
        {
            title: "Glossary",
            url: "/glossary",
            id: 10
    },
        {
            title: "The people",
            url: "/people",
            id: 1
    },
        {
            title: "Prototypes",
            url: "/prototypes",
            id: 12
    }
             ],
    problemmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "The scope",
            anchor: "scope",
    }
    ],
    peoplemenu: [
        {
            title: "The team",
            anchor: "team",
    },
        {
            title: "Key stakeholders",
            anchor: "stakeholders",
    },
        {
            title: "Other teams",
            anchor: "contacts",
    },
        {
            title: "Ways of working",
            anchor: "ways-of-working",
    }
    ],
    userresearchmenu: [
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Insights",
            anchor: "insights",
    }
    ],
    userapproachmenu: [
        {
            title: "Assumptions",
            anchor: "assumptions",
    },
        {
            title: "Life event",
            anchor: "life-event",
    },
        {
            title: "Testing",
            anchor: "testing",
    }
    ],
    usersummarymenu: [
        {
            title: "Rationale",
            anchor: "rationale"
},
        {
            title: "Approach",
            anchor: "approach"
        },
        {
            title: "Insights",
            anchor: "insights"
        }
    ],
    userinsightsmenu: [
        {
            title: "Users identified a variety of benefits of the concept of the GOV.UK account within X-Gov transactions",
            anchor: "insight-1"
        },
        {
            title: "Not everyone will perceive the GOV.UK account as valuable or useful",
            anchor: "insight-2"
        },
        {
            title: "Users want to be clear on how their data is being used",
            anchor: "insight-3"
        },
        {
            title: "Data control and management functions were received positively in user research",
            anchor: "insight-4"
        },
        {
            title: "Users expect their data will be processed in some way",
            anchor: "insight-5"
        },
        {
            title: "Users see curated or personalised content as being accurate to them",
            anchor: "insight-6"
        },
        {
            title: "Users’ descriptions of the GOV.UK account in their own words",
            anchor: "insight-7"
        },
        {
            title: "Users don’t care how their data is stored, as long as it is secure",
            anchor: "insight-8"
        },
        {
            title: "Users expect the government’s online services to be secure",
            anchor: "insight-9"
        },
        {
            title: "There were mixed perceptions of future features such as automated transactions",
            anchor: "insight-10"
        },
        {
            title: "User perception of how features could be used may not align to how we intended them to be used (needs rewrite)",
            anchor: "insight-11"
        }
    ],
    userneedsmenu: [
        {
            title: "Background",
            anchor: "background"
        },
        {
            title: "Guidance",
            anchor: "guidance "
        },
        {
            title: "Summary",
            anchor: "summary"
        }
    ],
    userrecommendationsmenu: [
        {
            title: "Clarity and transparency",
            anchor: "recommendation-1"
        },
        {
            title: "Control and consent",
            anchor: "recommendation-2"
        },
        {
            title: "UI considerations",
            anchor: "recommendation-3"
        },
        {
            title: "Impact on services",
            anchor: "recommendation-4"
        },
        {
            title: "Understand the needs of citizen users ",
            anchor: "recommendation-5"
        },
        {
            title: "Do user research to understand how users could potentially use features",
            anchor: "recommendation-6"
        },
        {
            title: "Create a secure service which protects users’ privacy",
            anchor: "recommendation-7"
        },
        {
            title: "Listen to the way users describe things in their own words",
            anchor: "recommendation-8"
        }
    ],
    serviceresearchmenu: [
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "Insights",
            anchor: "insights",
    }
    ],
    serviceapproachmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "Round 1",
            anchor: "round-1",
    },
        {
            title: "Round 2",
            anchor: "round-2",
    },
        {
            title: "Challenges",
            anchor: "challenges",
    }
    ],
    servicesummarymenu: [
        {
            title: "Rationale",
            anchor: "rationale"
},
        {
            title: "Approach",
            anchor: "approach"
        },
        {
            title: "Insights",
            anchor: "insights"
        }
    ],
    serviceinsightsmenu: [
        {
            title: "Background",
            anchor: "background ",
    },
        {
            title: "Round 1",
            anchor: "round-1",
    },
        {
            title: "Round 2",
            anchor: "round-2",
    },
        {
            title: "Limitations",
            anchor: "limitations",
    }
    ],
    datamenu: [
        {
            title: "Approach",
            anchor: "approach",
    },
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "Insights",
            anchor: "insights",
    }
    ],
    dataapproachmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "Workshops",
            anchor: "workshops",
    },
        {
            title: "Methodology",
            anchor: "methodology",
    },
        {
            title: "Data dictionary",
            anchor: "data-dictionary",
    },
        {
            title: "Challenges",
            anchor: "challenges",
    }
    ],
    datasummarymenu: [
        {
            title: "Background",
            anchor: "background"
},
        {
            title: "Digital Transformation Journey",
            anchor: "transformation"
},
        {
            title: "Capabilities",
            anchor: "capabilities"
}
    ],
    datasurveymenu: [
        {
            title: "Approach",
            anchor: "approach",
        },
        {
            title: "Analysis",
            anchor: "analysis",
    }
            ],
    datainsightsmenu: [
        {
            title: "Background",
            anchor: "background",
        },
        {
            title: "Service research data findings",
            anchor: "service-research-data-findings",
    },
        {
            title: "Data Models",
            anchor: "data-models",
    },
        {
            title: "Data Dictionary",
            anchor: "data-dictionary",
    }
    ],
    featuresmenu: [
        {
            title: "Summary",
            anchor: "summary",
    },
        {
            title: "The features",
            anchor: "featurelist",
    }
    ],
    recommendationsmenu: [
        {
            title: "End user recommendations",
            anchor: "end-user-recommendations",
    },
        {
            title: "Service user recommendations",
            anchor: "service-user-recommendations",
    },
        {
            title: "Data recommendations",
            anchor: "data-recommendations",
    }
    ],
    pillarsmenu: [
        {
            title: "Diagram (placeholder)",
            anchor: "diagram",
    }
    ],
    phase3menu: [

    ],
    prototypemenu: [

    ],
    features: {
        "01": "Suggested eligibility",
        "02": "Service recommendations",
        "03": "Dashboard",
        "04": "Curated content",
        "05": "Legacy data",
        "06": "Trusted data",
        "07": "Notifications",
        "08": "Global push",
        "09": "Profile completion",
        "10": "Global consent & personalisation permissions",
        "11": "Delete your data",
        "12": "External data",
        "13": "Consent management",
        "14": "Edit details in a service journey",
        "15": "Autofill",
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
        needlabel2: 'Reduce the stress of paperwork and admin',
        needlabel3: 'Reduce the burden of supplying proof',
        needlabel4: 'Save time',
        needlabel5: 'Avoid phoning the service',
        needlabel6: 'Feel safe and secure online',
        needlabel7: 'Feel confident in the way my data is being used',
        needlabel8: 'Reduce cognitive load',
        needlabel9: 'Find what I need easily'
    },
    objectives: {
        objective1: 'Identify user benefits, expectations and challenges of a personalised experience across government, via the GOV.UK account',
        objective2: 'Identify service benefits, expectations and challenges of sharing data across government, via the GOV.UK account',
        objective3: 'Identify the gaps in current service journeys when processing data within application',
        objective4: 'Create an indicative data model that enables data sharing across government services, via the GOV.UK account',
        objective5: 'Identify considerations and assumptions around legislation, data sharing MOUs, SLAs and Governance',
        objective6: 'Identify gaps in technical architecture within services'
    },
    valuetoservice: {
        valuetoservicelabel1: 'Not valuable',
        valuetoservicelabel2: 'Indifferent',
        valuetoservicelabel3: 'Somewhat valuable',
        valuetoservicelabel4: 'Valuable'
    },
    riskcategory: {
        risklabel1: 'Impact on service',
        risklabel2: 'User impact/acceptance',
        risklabel3: 'Accuracy of data',
        risklabel4: 'Liability',
        risklabel5: 'Security/fraud',
        risklabel6: 'Sensitivity of data',
    },
    glossary: {
        Banana: 'Definition goes here',
        Apple: 'Definition goes here',
        Cherry: 'Definition goes here',
        Kiwi: 'Definition goes here',
        Orange: 'Definition goes here',
        Pear: 'Definition goes here'
    }

}
