
const path = require('path');
module.exports = {};

module.exports.homeRoute = (app) => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/../../build/index.html'));
    });
};