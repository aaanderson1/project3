var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

/*
Party
firstName - string
lastName - string
eventDate - date
rsvpDeadlineDate - date
organizerId - string
rsvpId - string
*/

var PartySchema = new Schema({

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    eventDate: {
        type: Date,
        required: true,
    },

    rsvpDeadlineDate: {
        type: Date,
        required: true,
    },

    organizerId: {
        type: String,
        required: true,
    },

    rsvpId: {
        type: String,
        required: true,
    },

    gifts: [{
        type: Schema.Types.ObjectId,
        ref: "Gift"
    }],

    guests: [{
        type: Schema.Types.ObjectId,
        ref: "Guest"
    }],
});

var Party = mongoose.model("Party", PartySchema);

module.exports = Party;
