var express = require('express')

var app = express()

app.get('/notes', function(req, res) {
  res.json({
    "page": 1,
    "results": [
        {
            "authorsText": "",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "https://en.m.wikipedia.org/wiki/Earth",
            "id": "269717",
            "incomplete": false,
            "notesCount": 1,
            "pdfUrl": null,
            "publicationText": "https://en.m.wikipedia.org/wiki/Earth",
            "title": "Earth - Wikipedia",
            "type": "WEBSITE"
        },
        {
            "authorsText": "Luzum B, Capitaine N, (...), Wallace P",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "http://link.springer.com/10.1007/s10569-011-9352-4",
            "id": "167692",
            "incomplete": false,
            "notesCount": 0,
            "pdfUrl": null,
            "publicationText": "Celest Mech Dyn Astr, 2011",
            "title": "The IAU 2009 system of astronomical constants: the report of the IAU working group on numerical standards for Fundamental Astronomy",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "Dalrymple G",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "http://sp.lyellcollection.org/cgi/doi/10.1144/GSL.SP.2001.190.01.14",
            "id": "47164",
            "incomplete": false,
            "notesCount": 0,
            "pdfUrl": null,
            "publicationText": "Geological Society, London, Special Publications, 2001",
            "title": "The age of the Earth in the twentieth century: a problem (mostly) solved",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "Williams J",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "http://adsabs.harvard.edu/cgi-bin/bib_query?1994AJ....108..711W",
            "id": "47161",
            "incomplete": false,
            "notesCount": 0,
            "pdfUrl": null,
            "publicationText": "Astron J (N Y), 1994",
            "title": "Contributions to the Earth's obliquity rate, precession, and nutation",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "https://en.wikipedia.org/wiki/Earth",
            "id": "269716",
            "incomplete": false,
            "notesCount": 0,
            "pdfUrl": null,
            "publicationText": "https://en.wikipedia.org/wiki/Earth",
            "title": "Earth - Wikipedia",
            "type": "WEBSITE"
        },
        {
            "authorsText": "Scott E",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261212",
            "incomplete": true,
            "notesCount": 0,
            "pdfUrl": "/newapi/work/item/261212/resources/250484/pdf",
            "publicationText": "",
            "title": "Understanding single-page web application",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261211",
            "incomplete": true,
            "notesCount": 0,
            "pdfUrl": "/newapi/work/item/261211/resources/250483/pdf",
            "publicationText": "",
            "title": "Secrets_of_the_JavaScript_Ninja_Second__v9_MEAP.pdf",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "",
            "bookmarked": true,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261190",
            "incomplete": false,
            "notesCount": 1,
            "pdfUrl": "/newapi/work/item/261190/resources/250463/pdf",
            "publicationText": "",
            "title": "Express In Action",
            "type": "MANUAL_ITEM_PDF"
        },
        {
            "authorsText": "MCMHTJHNR",
            "bookmarked": true,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261189",
            "incomplete": true,
            "notesCount": 0,
            "pdfUrl": "/newapi/work/item/261189/resources/250462/pdf",
            "publicationText": "",
            "title": "Node.js In Action",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261188",
            "incomplete": true,
            "notesCount": 2,
            "pdfUrl": "/newapi/work/item/261188/resources/250461/pdf",
            "publicationText": "",
            "title": "Functional_Programming_in_JavaScript.pdf",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261187",
            "incomplete": true,
            "notesCount": 0,
            "pdfUrl": "/newapi/work/item/261187/resources/250460/pdf",
            "publicationText": "",
            "title": "Reactive_Design_Patterns_v10_MEAP.pdf",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": null,
            "id": "261176",
            "incomplete": true,
            "notesCount": 3,
            "pdfUrl": "/newapi/work/item/261176/resources/250450/pdf",
            "publicationText": "",
            "title": "React_Quickly_v3_MEAP.pdf",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "Lindauer M",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "http://link.springer.com/10.1007/BF00341108",
            "id": "261163",
            "incomplete": false,
            "notesCount": 1,
            "pdfUrl": null,
            "publicationText": "Zeitschrift f\ufffdr vergleichende Physiologie, 1956",
            "title": "\ufffdber die Verst\ufffdndigung bei indischen Bienen",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "Seeley TD, Seeley RH, Akratanakul P",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "http://doi.wiley.com/10.2307/2937344",
            "id": "261162",
            "incomplete": false,
            "notesCount": 0,
            "pdfUrl": null,
            "publicationText": "Ecol Monogr, 1982",
            "title": "Colony Defense Strategies of the Honeybees in Thailand",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "Dyer FC, Seeley TD",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "http://doi.wiley.com/10.2307/1938911",
            "id": "261161",
            "incomplete": false,
            "notesCount": 0,
            "pdfUrl": null,
            "publicationText": "Ecology, 1991",
            "title": "Nesting Behavior and the Evolution of Worker Tempo in Four Honey Bee Species",
            "type": "RESEARCH_ARTICLE"
        },
        {
            "authorsText": "Kastberger G, Waddoup D, (...), Hoetzl T",
            "bookmarked": false,
            "f1000Recommended": false,
            "fullTextLink": "/fulltext/doi/10.1371/journal.pone.0157882",
            "id": "259500",
            "incomplete": false,
            "notesCount": 3,
            "pdfUrl": "/newapi/work/item/259500/resources/250439/pdf",
            "publicationText": "PLoS ONE, 2016",
            "title": "Evidence for Ventilation through Collective Respiratory Movements in Giant Honeybee (Apis dorsata) Nests.",
            "type": "RESEARCH_ARTICLE"
        }
    ],
    "size": 20,
    "total": 16,
    "totalPages": 1
  })
})

app.listen(3000)
