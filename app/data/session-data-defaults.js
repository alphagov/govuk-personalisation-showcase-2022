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

    indexlink: "/index",
    maintitle: "X-Gov Services",
    highlight: "Key insight(s)",
    example: "Research example(s)",
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
            title: "The Pillars",
            url: "/pillars",
            id: 8
    },
        {
            title: "Glossary",
            url: "/glossary",
            id: 10
    },
        {
            title: "People & teams",
            url: "/people",
            id: 1
    },
        {
            title: "Prototypes",
            url: "/prototypes",
            id: 9
    },
        {
            title: "Q&A",
            url: "/q-and-a",
            id: 11
    },
             ],
    problemmenu: [
        {
            title: "Overview",
            anchor: "overview",
    },
        {
            title: "The objective",
            anchor: "task",
    },
        {
            title: "The approach",
            anchor: "approach",
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
    },
        {
            title: "Gathering insights",
            anchor: "gathering-insights",
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
            title: "Users identified various benefits of the GOV.UK account and the concept of X-GOV journeys",
            anchor: "insight-1",
            teams: ["04", "05", "07", "08"]
        },
        {
            title: "Not everyone will perceive the GOV.UK account as valuable or useful",
            anchor: "insight-2",
            teams: ["04", "08", "07", "08", "09"]
        },
        {
            title: "Users hold a variety of assumptions about how their data is used by the government",
            anchor: "insight-3",
            teams: ["04", "07", "02", "09"]
        },
        {
            title: "Users hold a variety of assumptions about how their data is shared by the government",
            anchor: "insight-4",
            teams: ["04", "03", "07", "01", "02"]
        },
        {
            title: "Users appreciate the ability to control and manage their data",
            anchor: "insight-5",
            teams: ["04", "03", "02", "08"]
        },
        {
            title: "Users read personalised content as accurate to them",
            anchor: "insight-6",
            teams: ["04", "07", "09"]
        },
        {
            title: "Users’ descriptions of the GOV.UK account in their own words",
            anchor: "insight-7",
            teams: ["04", "08", "07", "08"]
        },
        {
            title: "Users don’t care how their data is stored, as long as it is secure",
            anchor: "insight-8",
            teams: ["04", "03"]
        },
        {
            title: "Users expect the government’s online services to be secure",
            anchor: "insight-9",
            teams: ["04", "08"]
        },
        {
            title: "Automated transactions create a sense of nervousness for some users ",
            anchor: "insight-10",
            teams: ["04", "07", "01"]
        },
        {
            title: "Users expect a way of getting in touch if they have an issue with their account",
            anchor: "insight-11",
            teams: ["04"]
        }
    ],
    userneedsmenu: [
        {
            title: "Identified user needs",
            anchor: "user-needs"
        },
        {
            title: "How our ‘life event’ relates to user needs",
            anchor: "life-event"
        },
        {
            title: "Background",
            anchor: "background"
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
            title: "Challenges & limitations",
            anchor: "limitations",
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
            title: "Services only share limited data outside of their own government departments",
            anchor: "insight-1",
            teams: ["04", "05", "07", "02"]
    },
        {
            title: "Many services use third party data with a high reliance on manual processes ",
            anchor: "insight-2",
            teams: ["04", "05", "07", "02"]
    },
        {
            title: "Services are transforming at different rates which creates compatibility issues",
            anchor: "insight-3",
            teams: ["04", "05", "07", "01", "02"]
    },
        {
            title: "Services expect to benefit from sharing data across X-Gov in a number of ways",
            anchor: "insight-4",
            teams: ["04", "05", "07", "01", "02"]
    },
        {
            title: "Data assurance standards and current legislation are fundamental service concerns",
            anchor: "insight-5",
            teams: ["04", "05", "07", "01", "02"]
    },
        {
            title: "Existing roadmaps and resource commitment creates competing priorities with the GOV.UK account integration",
            anchor: "insight-6",
            teams: ["04", "05", "07", "08"]
    },
        {
            title: "Services expect that a level playing field will be created, with all available data on the table",
            anchor: "insight-7",
            teams: ["04", "05", "02"]
    },
        {
            title: "Services identified joining up systems and back office processes as key challenges",
            anchor: "insight-8",
            teams: ["04", "05", "07", "02"]
    },
        {
            title: "Services see the hypothetical account features as either “core or value added”",
            anchor: "insight-9",
            teams: ["04", "05", "08"]
    },
        {
            title: "Service users expect to be clear about the operating model and support mechanism for end users",
            anchor: "insight-10",
            teams: ["04", "05", "07", "08"]
    },
        {
            title: "User adoption and user reactions are key considerations",
            anchor: "insight-11",
            teams: ["04", "05", "08"]
    },
        {
            title: "Services identified that not all data should be available for re-use within the GOV account",
            anchor: "insight-12",
            teams: ["04", "05", "07", "01"]
    },
        {
            title: "Services believe that individual control of data is essential",
            anchor: "insight-13",
            teams: ["04", "05", "09"]
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
            title: "Objective",
            anchor: "Objective",
    },
        {
            title: "Participants",
            anchor: "Participants",
    },
        {
            title: "Analysis",
            anchor: "Analysis",
    },
        {
            title: "Themes",
            anchor: "Themes",
    },
        {
            title: "Limitations of the research",
            anchor: "Limitations",
    },
        {
            title: "Areas for further exploration",
            anchor: "Exploration",
    }
            ],
    datainsightsmenu: [
        {
            title: "There are four key capabilities needed for services to support the features we’ve tested",
            anchor: "insight-1",
            teams: ["04", "05"]
        },
        {
            title: "Most of the services we spoke to are either planning, supporting or currently undergoing a digital transformation",
            anchor: "insight-2",
            teams: ["04", "05", "01"]
    },
        {
            title: "GOV.UK account features may support and improve services business processes",
            anchor: "insight-3",
            teams: ["04", "05", "07", "08"]
    },
        {
            title: "Services will have needs that GOV.UK account features can’t meet",
            anchor: "insight-4",
            teams: ["04", "05", "08"]
    },
        {
            title: "Services generally need the same information from their users",
            anchor: "insight-5",
            teams: ["04", "05", "07", "01", "02"]
    },
        {
            title: "Services vary significantly in how they receive and record information from their users",
            anchor: "insight-6",
            teams: ["04", "05", "07", "01", "02", "09"]
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
            title: "Now",
            anchor: "now",
    },
        {
            title: "Next",
            anchor: "next",
    },
        {
            title: "Later",
            anchor: "later",
    },
        {
            title: "Design considerations",
            anchor: "design",
    },
        {
            title: "Control & consent",
            anchor: "control",
    },
        {
            title: "Data storage & security",
            anchor: "security",
    }
    ],
    pillarsmenu: [
        {
            title: "Summary",
            anchor: "summary",
    }
    ],
    phase3menu: [
        {
            title: "Communicate recommendations for prioritised features to relevant teams",
            anchor: "objective-1",
        },
        {
            title: "Recommend an approach for implementing the prioritised features",
            anchor: "objective-2",
    },
        {
            title: "Knowledge sharing across teams within the wider programme",
            anchor: "objective-3",
    }
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
        "17": "Audit trail",
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
        "29": "Account flags",
        "30": "Store card and manage recurring payment"
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
        "X-Gov Services": 'Joined up services across government ',
        "PODS": 'Personal Data Store -  a way of storing user data within their GOV.UK account',
        "CI / CD pipelines": 'A Continuous integration/continuous delivery (CI/CD) pipeline is a series of steps that must be performed in order to deliver a new version of software.',
        "DI": 'Digital Identity',
        "GDX": 'Government Data Exchange',
        "SSI / SSO": 'Single Sign On'
    },
    teams: [
        {
            name: "GOV.UK Forms",
            id: 0,
            slacklink: "https://gds.slack.com/archives/C01F4NWT6CW",
            focus: "Tackling the long tail of pdf and other document-based service forms, supporting services to quickly create online forms using a common form-building platform for government.",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "Harry Vos",
                    email: "https://gds.slack.com/team/UAEUDVA4Q"
                },
                {
                    role: "Delivery",
                    name: "Astrid Simonsen",
                    email: ""
           },
                {
                    role: "Tech",
                    name: "James Shepherd",
                    email: ""
           },
                {
                    role: "Design",
                    name: "Tim Paul",
                    email: ""
           }
           ]
        },
        {
            name: "GDX",
            id: 1,
            slacklink: "https://gds.slack.com/archives/C02QZE8QZPS",
            focus: "Looking at operational data used to deliver public services. A project to explore the value and feasibility of a common solution for data sharing across government. Looking at existing data shares to identify challenges and test prototypes, Aiming to facilitate the sharing of data about citizens",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "Antonia Panayotova",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "J Harrison",
                    email: ""
           },
                {
                    role: "Tech",
                    name: "Andrew Maddison",
                    email: ""
           }, {
                    role: "Tech",
                    name: "Erin Raj-Staniland ",
                    email: ""
           },
                {
                    role: "Research",
                    name: "Ting Ting Zhao",
                    email: ""
           }
           ]
        },
        {
            name: "Manage My Data",
            id: 2,
            slacklink: "https://gds.slack.com/archives/C02QZE8QZPS",
            focus: "The Manage My Data team are exploring a solution for storage of user data through Solid Pods",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "Paul Wakely",
                    email: ""
           },
                {
                    role: "Tech",
                    name: "Michael Stoodley",
                    email: ""
           }
           ]
        },
        {
            name: "Accounts",
            id: 3,
            slacklink: "https://gds.slack.com/archives/C012GEZBZM0",
            focus: "Part of one login for government, looking at how users navigate to the account, how to manage having multiple accounts and what a signed-in state looks like for users",
            roadmap: "https://docs.google.com/document/d/1BYIhbNCD4hZKF3ZqN-KYwOlZ1SHPODYv3tpCXvcnG1g/edit?usp=sharing",
            members: [
                {
                    role: "Product",
                    name: "Maxwell Riess",
                    email: "https://gds.slack.com/team/UDBAFQCM7"
                },
                {
                    role: "Delivery",
                    name: "Lisa King",
                    email: "https://gds.slack.com/team/U01GF1LC4MQ"
           },
                {
                    role: "Research",
                    name: "Ned Thistlethwaite",
                    email: "https://gds.slack.com/team/UAFL5K6JK"
           }
           ]
        },
        {
            name: "Authentication",
            id: 4,
            slacklink: "https://gds.slack.com/archives/C01TN7NC951",
            focus: "Dealing with User Authentication and ensuring that the individual logging into a service is recognised and who they say they are",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "Karen Lamb",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "Nia Jones",
                    email: ""
           },
                {
                    role: "Tech",
                    name: "Darren Hutton",
                    email: ""
           }
           ]
        },
        {
            name: "SMT",
            id: 5,
            slacklink: "",
            focus: "",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "Robert Rankin",
                    email: ""
                }
           ]
        },
        {
            name: "Whole User Journeys",
            id: 6,
            slacklink: "https://gds.slack.com/archives/C02ETRFAU82",
            focus: "To simplify users’ interactions with government by helping departments join up across complex problems, and working together to improve them",
            roadmap: "https://docs.google.com/document/d/19kByzQeF_NiiseyCfjOAPRUIftDg3Ben-WYw6dCcmUU/edit?usp=sharing",
            members: [
                {
                    role: "Product",
                    name: "Laura Flannery",
                    email: ""
                },
                {
                    role: "Design",
                    name: "Ignacia Orellana",
                    email: ""
           },
                {
                    role: "Design",
                    name: "Paulina Gonzalez-Ortega",
                    email: ""
           },
                {
                    role: "Content",
                    name: "Jane Van Der Ban",
                    email: ""
           }
           ]
        },
        {
            name: "Design for adoption",
            id: 7,
            slacklink: "https://gds.slack.com/archives/C02A5LGV9U2",
            focus: "",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "",
                    email: ""
           }
           ]
        },
        {
            name: "Data labs",
            id: 8,
            slacklink: "https://gds.slack.com/archives/CHR4UQKU4",
            focus: "The Data Labs team analyse data across the GOV.UK website to provide teams with insight and recommendations as to how personalisation should be enabled for the user",
            roadmap: "https://docs.google.com/document/d/1MLiiiZelVq6N0f6A7hiVbrYOZZUf0lc3Au5A8wLVzfk/edit?usp=sharing",
            members: [
                {
                    role: "Product",
                    name: "Mohamed Abdisalam",
                    email: "https://gds.slack.com/team/UD58P6DTL"
                },
                {
                    role: "Data science",
                    name: "Felix Reilly",
                    email: "https://gds.slack.com/team/U02H51QG5QA"
           },
                {
                    role: "Design",
                    name: "John Steward",
                    email: "https://gds.slack.com/team/U01G8B2DX8R"
           }
           ]
        },
        {
            name: "Connected Insights",
            id: 9,
            slacklink: "https://gds.slack.com/archives/C02LU2DKK51",
            focus: "",
            roadmap: "https://docs.google.com/document/d/11ZPMUQcevrb-or8NB83NTULhfiXooWi-8z9R4sWM9gY/edit?usp=sharing",
            members: [
                {
                    role: "Product",
                    name: "Ganesh Senthi",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "Tony Azuka",
                    email: ""
           }
           ]
        },
        {
            name: "Data groups",
            id: 10,
            slacklink: "https://gds.slack.com/archives/C01J9R88WV9",
            focus: "",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "Manuel Rodriguezknapik",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "",
                    email: ""
           }
           ]
        },
        {
            name: "Digital Identity",
            id: 11,
            slacklink: "https://gds.slack.com/archives/CABG3AZNV",
            focus: "A safe, easy way for the public to access all government services online in the same place - a single sign-on and identity checking system for government",
            roadmap: "https://docs.google.com/presentation/d/1NymhqTMY1w0DBb-cO8TE_UQG-SabI0fcW9W8hbY1VrI/edit#slide=id.gcf8ddf212e_0_0",
            members: [
                {
                    role: "Product",
                    name: "Emily Labrum",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "",
                    email: ""
           },
                {
                    role: "Tech",
                    name: "Peter Chamberlain",
                    email: ""
           },
                {
                    role: "Content",
                    name: "Paola Roccuzzo",
                    email: ""
           },
                {
                    role: "Design",
                    name: "Tory Dunn",
                    email: ""
           },
                {
                    role: "Design",
                    name: "Matt Fielding",
                    email: ""
           }
           ]
        },
        {
            name: "GaaP",
            id: 12,
            slacklink: "https://gds.slack.com/archives/C01E20X06JK",
            focus: "",
            roadmap: "",
            members: [
                {
                    role: "Product",
                    name: "Tim Paul",
                    email: ""
                },
                {
                    role: "Delivery",
                    name: "",
                    email: ""
           }
           ]
        }
    ],
    roles: [
       "Product",
        "Delivery",
        "Design",
        "Content",
        "Research",
        "Tech"
    ],
    recommendationheadings: {
        why: "Why do we recommend this?",
        what: "What will it enable?",
        who: "Interested parties",
        challenges: "What are the challenges/potential blockers?",
        consequences: "What happens if this isn’t implemented?",
        considerations: "Are there any other considerations?",
        more: "Where can I find more information about this?"
    },
    recommendations: [
        {
            rid: 0,
            title: "Further user research and consultation with SMEs to understand which tech options will best meet user needs",
            teams: ["03", "01"],
            priority: "now",
            discipline: ["End user research", "Architecture", "Data", "Security"]
        },
        {
            rid: 1,
            title: "Conduct a communications and branding exercise on the naming and description of the GOV.UK account",
            teams: ["04", "08"],
            priority: "now",
            discipline: ["End user research", "Service research", "Branding", "Adoption", "Communication"]
        },
        {
            rid: 2,
            title: "Further end user concept testing of an attribute store, and attribute sharing",
            teams: ["01", "09"],
            priority: "next",
            show: false,
            discipline: ["End user research", "Service research", "Data", "Architecture"]
        },
        {
            rid: 3,
            title: "Explore user expectations around document upload",
            teams: ["03", "04", "01"],
            priority: "later",
            discipline: ["End user research", "Architecture"]
        },
        {
            rid: 4,
            title: "Further exploration around encouraging/compelling users to set up a GOV.UK account and add data to it",
            teams: ["08", "04", "01"],
            priority: "later",
            discipline: ["End user research", "Branding", "Adoption", "Communication"]
        },
        {
            rid: 5,
            title: "Provide users with a way of contacting the GOV.UK accounts team",
            teams: ["04"],
            priority: "later",
            show: false,
            discipline: ["End user research", "Service research", "Operating model"]
        },
        {
            rid: 6,
            title: "Conduct further concept exploration on legacy data",
            teams: ["04", "12", "09", "03", "01"],
            priority: "later",
            discipline: ["End user research", "Service research", "Data", "Architecture", "Legal"]
        },
        {
            rid: 7,
            title: "Conduct concept exploration with end users on account flags",
            teams: ["04"],
            priority: "later",
            discipline: ["End user research", "Service research", "Data", "Architecture"]
        },
        {
            rid: 8,
            title: "Conduct further experimentation on personalised navigation",
            teams: ["04", "07", "09"],
            priority: "later",
            discipline: ["End user research"]
        },
        {
            rid: 9,
            title: "Conduct further concept exploration on external data",
            teams: ["04", "03", "01"],
            priority: "later",
            discipline: ["End user research", "Data", "Legal"]
                },
        {
            rid: 10,
            title: "Conduct further concept exploration on payment methods",
            teams: ["04", "01"],
            priority: "later",
            discipline: ["End user research"]
        },
        {
            rid: 11,
            title: "Conduct further research on shared information with safeguarding SMEs",
            teams: ["04", "07", "03", "01"],
            priority: "later",
            discipline: ["End user research", "Service research", "Legal", "Data", "Architecture", "Security"]
        },
        {
            rid: 12,
            title: "Do further concept exploration on curated and personalised content",
            teams: ["04", "07", "03", "09"],
            priority: "later",
            discipline: ["End user research", "Service research", "Legal", "Data"]
                },
        {
            rid: 13,
            title: "Research different end users of the GOV.UK account",
            teams: ["05", "12", "04", "01", "03"],
            priority: "later",
            discipline: ["End user research", "Adoption", "Legal", "Service research"]
                },
        {
            rid: 14,
            title: "Continue research on consent patterns",
            teams: ["04", "01"],
            priority: "later",
            discipline: ["End user research", "Legal"]
                },
        {
            rid: 15,
            title: "Explore how to effectively communicate and educate government services about the GOV.UK account and the long-term vision ",
            teams: ["08"],
            priority: "now",
            discipline: ["Service research", "Adoption", "Communication"]
                },
        {
            rid: 16,
            title: "Conduct research to understand, for services undergoing a digital transformation, how their roadmap aligns with the GOV.UK account roadmap",
            teams: ["08"],
            priority: "next",
            show: false,
            discipline: ["Service research", "Communication", "Adoption"]
                },
        {
            rid: 17,
            title: "Conduct further service research to fully understand the value and complexity of adopting each of the hypothetical account features ",
            teams: ["08"],
            priority: "next",
            discipline: ["Service research", "Legal", "Data", "Architecture", "Adoption"]
                },
        {
            rid: 18,
            title: "Conduct further research with services to assess the technical complexity of features from a service integration perspective",
            teams: ["08"],
            priority: "next",
            discipline: ["Service research", "Legal", "Data", "Architecture", "Adoption"]
                },
        {
            rid: 19,
            title: "Create a set of service team user needs for each feature",
            teams: ["08"],
            priority: "later",
            discipline: ["Service research"]
                },
        {
            rid: 20,
            title: "Conduct research across government services to build an accurate picture on the use of data dictionaries and information standards, in particular the GPG 45",
            teams: ["01", "02", "09"],
            priority: "now",
            discipline: ["Service research", "Data"]
                },
        {
            rid: 21,
            title: "Widen the recruitment profile to include services with greater digital maturity",
            teams: ["08"],
            priority: "now",
            show: false,
            discipline: ["Service research", "Data"]
                },
        {
            rid: 22,
            title: "Understand which data items present the greatest benefits to users in terms of reuse and personalisation",
            teams: ["04", "01", "07", "09"],
            priority: "now",
            discipline: ["Service research", "Data", "End user research"]
                },
        {
            rid: 23,
            title: "Consider development, implementation and maintenance of a cross-government data dictionary, or ongoing cross-government data matching",
            teams: ["01", "02", "09"],
            priority: "now",
            discipline: ["Service research", "Data", "End user research"]
                },
        {
            rid: 24,
            title: "Develop an adoption roadmap targeting services with low digital maturity",
            teams: ["08", "06"],
            priority: "now",
            discipline: ["Service research", "Data", "Adoption"]
                },
        {
            rid: 25,
            title: "Re-examine the GOV.UK account principles for minimal data use, in context of the future account features",
            teams: ["04", "09"],
            priority: "next",
            discipline: ["Legal", "Data"]
                },
        {
            rid: 26,
            title: "Conduct research across government services to determine the status of their digital transformation and how it will align with the GOV.UK account roadmap",
            teams: ["08"],
            priority: "now",
            discipline: ["Service research", "Data", "Adoption", "Architecture", "Communication"]
                },
        {
            rid: 27,
            title: "Understand how to deliver an effective customer support model",
            teams: ["04"],
            priority: "next",
            discipline: ["Service research", "End user research", "Operating model", "Communication"]
                },
        {
            rid: 28,
            title: "Design with future scalability in mind",
            teams: ["04"],
            priority: "design",
            discipline: ["Design", "End user research"]
                },
        {
            rid: 29,
            title: "Consider the impact on services before proceeding with design and implementation",
            teams: ["04", "07"],
            priority: "design",
            discipline: ["Design", "End user research", "Service research"]
                },
        {
            rid: 30,
            title: "Provide clear messaging on how the government will (or will not) process data",
            teams: ["04"],
            priority: "design",
            discipline: ["Design", "Data", "Architecture", "End user research", "Service research"]
                },
        {
            rid: 31,
            title: "Ensure user expectations and the capability of the feature is aligned. We believe this is a priority for service design",
            teams: ["04", "07"],
            priority: "design",
            discipline: ["Design", "End user research"]
                },
        {
            rid: 32,
            title: "Ensure the user can see why something is happening - be specific about how a page is being personalised, or why a service is being suggested",
            teams: ["04", "07"],
            priority: "design",
            discipline: ["Design", "End user research"]
                },
        {
            rid: 33,
            title: "Be clear about impact to the user",
            teams: ["04", "07"],
            priority: "design",
            discipline: ["Design", "End user research"]
                },
        {
            rid: 34,
            title: "Ensure the user can review what has happened and when",
            teams: ["04", "07"],
            priority: "design",
            discipline: ["Design", "End user research"]
                },
        {
            rid: 35,
            title: "Be clear about responsibilities - as the account becomes feature rich, it may shift responsibilities away from the user",
            teams: ["04", "07"],
            priority: "design",
            discipline: ["Design", "End user research", "Legal"]
                },
        {
            rid: 36,
            title: "Ensure the feature gives the user control and seeks their permission",
            teams: ["04", "07"],
            priority: "control",
            discipline: ["Design", "End user research", "Legal", "Consent"]
                },
        {
            rid: 37,
            title: "Give users the ability to control their data",
            teams: ["04", "07", "03"],
            priority: "control",
            discipline: ["Design", "End user research", "Legal", "Consent", "Data"]
                },
        {
            rid: 38,
            title: "Give users control and visibility over who gets to see their data",
            teams: ["04", "07", "03"],
            priority: "control",
            discipline: ["Design", "End user research", "Legal", "Consent", "Data"]
                },
        {
            rid: 39,
            title: "Give users control over their data at individual item level",
            teams: ["04", "07", "03"],
            priority: "control",
            discipline: ["Design", "End user research", "Legal", "Consent", "Data"]
                },
        {
            rid: 40,
            title: "Create a secure service which protects users’ privacy",
            teams: ["04", "07", "03", "05", "12"],
            priority: "security",
            discipline: ["Design", "End user research", "Legal", "Consent", "Data"]
                }
            ]
}
