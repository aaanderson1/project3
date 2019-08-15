var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GiftSchema = new Schema({
    giftName: {
        type: String,
        required: true,
    },

    giftImageUrl: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    giftLinkUrl: {
        type: String,
        required: true,
    },

    quantityDesired: {
        type: Number,
        required: true,
    },

    quantityPurchased: {
        type: Number,
        required: true,
    },

    giftPurchased: {
        type: String,
        required: true,
    },

    party: {
        type: Schema.Types.ObjectId,
        ref: "Party"
    },
});

var Gift = mongoose.model("Gift", GiftSchema);

module.exports = Gift;

