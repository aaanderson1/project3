// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
// Require all models
var db = require("../models");
var uuid = require("uuid/v4");


module.exports = {};

module.exports.getPartyRoute = (app) => {
    app.get('/api/parties', (req, res) => {
        const data = req.query;
        console.log(data);
        res.setHeader('Content-Type', 'application/json');
        db.Party.find({})
            .then(function (dbParties) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParties);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
    app.post('/api/party', (req, res) => {
        console.log(req);
        const data = req.body;
        data.organizerId = uuid();
        data.rsvpId = uuid();
        db.Party.create(data)
            .then(function (dbGift) {
                res.json(dbGift);
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
        db.Party.deleteOne({
                _id: req.params.id
            })
            .then(function () {
                db.Gift.deleteMany({
                        party: db.Types.ObjectId(req.params.id)
                    })
                    .then(function () {

                        db.Guest.deleteMany({
                                party: db.Types.ObjectId(req.params.id)
                            })
                            .then(function () {
                                // If we were able to successfully find Guest, send them back to the client
                                res.json("{}");
                            })
                            .catch(function (err) {
                                // If an error occurred, send it to the client
                                res.json(err);
                            });
                    })
                    .catch(function (err) {
                        // If an error occurred, send it to the client
                        res.json(err);
                    });
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
};

module.exports.getGiftRoute = (app) => {
    app.get('/api/gift/:id', (req, res) => {
        const data = req.query;
        res.setHeader('Content-Type', 'application/json');
        db.Party.find({
                _id: req.params.id
            })
            .populate("gifts")
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParty[0].gifts);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json([]);
            });
    });

    app.post('/api/gift/', (req, res) => {
        const data = req.body;
        db.Gift.create(data)
            .then(function (dbGift) {
                res.json(dbGift);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });

    app.delete('/api/gift/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        db.Gift.deleteOne({
                _id: req.params.id
            })
            .then(function (dbGift) {
                // If we were able to successfully find Gift, send them back to the client
                res.json(dbGift);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
};


module.exports.getGuestRoute = (app) => {
    app.get('/api/guest/:id', (req, res) => {
        const data = req.query;
        res.setHeader('Content-Type', 'application/json');
        db.Party.find({
                _id: req.params.id
            })
            .populate("guests")
            .then(function (dbParty) {
                // If we were able to successfully find Partys, send them back to the client
                res.json(dbParty[0].guests);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json([]);
            });
    });

    app.post('/api/guest/', (req, res) => {
        const data = req.body;
        db.Guest.create(data)
            .then(function (dbGuest) {
                res.json(dbGuest);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });

    app.delete('/api/guest/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        db.Guest.deleteOne({
                _id: req.params.id
            })
            .then(function (dbGuest) {
                // If we were able to successfully find Guest, send them back to the client
                res.json(dbGuest);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
};