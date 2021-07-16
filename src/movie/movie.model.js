const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    actor: {
        type:String
    },
    watched:{
        type: Boolean,
        require: true,
        default:false
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = {
    Movie,
};