const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // tell from which model this value is associated with
            ref: "User"
        },
        text: {
            type: String,
            required: [true, "Please add a text value"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
