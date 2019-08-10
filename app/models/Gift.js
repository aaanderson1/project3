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
        type: mongoose.Types.Decimal128,
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
});

var Gift = mongoose.model("Gift", GiftSchema);

module.exports = Gift;

