var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GuestSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    gift: {
        type: Schema.Types.ObjectId,
        ref: "Gift"
    },

    address: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    party: {
        type: Schema.Types.ObjectId,
        ref: "Party"
    },

});

var Guest = mongoose.model("Guest", GuestSchema);

module.exports = Guest;

