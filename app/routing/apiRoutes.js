// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
// Require all models
var db = require("../models");


module.exports = {};

module.exports.getPartyRoute = (app) => {
    app.get('/api/parties', (req, res) => {
        const data = req.query;
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        db.Party.find({
                saved: data.saved
            })
            .then(function (dbParties) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParties);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
    app.get('/api/party/:id', (req, res) => {
        const data = req.query;
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        db.Party.find({
                _id: req.params.id
            })
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParty);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
    app.put('/api/party/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        db.Party.findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParty);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
    app.delete('/api/party/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        db.Party.remove({
                _id: req.params.id
            })
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParty);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
};

module.exports.getNotesRoute = (app) => {
    app.get('/api/notes/:id', (req, res) => {
        const data = req.query;
        res.setHeader('Content-Type', 'application/json');
        db.Party.find({
                _id: req.params.id
            })
            .populate("notes")
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParty[0].notes);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json([]);
            });
    });

    app.post('/api/notes/', (req, res) => {
        const data = req.body;
        db.Note.create(data)
            .then(function (dbNote) {
                db.Party.findOneAndUpdate({
                    _id: data._headlineId
                }, {
                    $push: {
                        notes: dbNote
                    }
                }).then(() => {
                    res.json("");
                }).catch(function (err) {
                    // If an error occurred, send it to the client
                    res.json(err);
                });
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });

    app.delete('/api/notes/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        db.Note.deleteOne({
                _id: req.params.id
            })
            .then(function (dbNote) {
                // If we were able to successfully find Notes, send them back to the client
                res.json(dbNote);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
};

module.exports.getClearRoute = (app) => {
    app.get('/api/clear', (req, res) => {
        const data = req.query;
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        db.Party.deleteMany({})
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json("Success");
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
};

module.exports.getFetchRoute = (app) => {
    app.get('/api/fetch', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        // First, we grab the body of the html with axios
        axios.get("https://www.theonion.com/").then(function (response) {

            db.Party.find({})
                .then(function (dbParty) {
                    // Then, we load that into cheerio and save it to $ for a shorthand selector
                    var $ = cheerio.load(response.data);

                    // Now, we grab every h2 within an article tag, and do the following:
                    $("article h1").each(function (i, element) {
                        // Save an empty result object
                        var result = {};

                        // Add the text and href of every link, and save them as properties of the result object
                        result.title = $(this)
                            .parent("a")
                            .text();
                        result.link = $(this)
                            .parent("a")
                            .attr("href");
                        result.saved = false;

                        // Create a new Party using the `result` object built from scraping
                        // console.log(`title: ${result.title}, link: ${result.link}`);
                        // Create a new Party using the `result` object built from scraping

                        for (let article of dbParty) {
                            if (article.title === result.title) {
                                return;
                            }
                        }

                        db.Party.create(result)
                            .then(function (dbParty) {
                                // View the added result in the console
                                // console.log(dbParty);
                            })
                            .catch(function (err) {
                                // If an error occurred, log it
                                // console.log(err);
                            });
                    });
                    db.Party.find({})
                    .then(function (dbParty) {
                    // Send a message to the client
                        res.json(dbParty);
                    })
                    .catch(function (err) {
                        // If an error occurred, send it to the client
                        res.json(err);
                    });;
                })
                .catch(function (err) {
                    // If an error occurred, send it to the client
                    res.json(err);
                });
        });
    });
};
