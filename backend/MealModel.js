const mongoose = require('mongoose');
const mealSchema = new mongoose. Schema({
    title:{
        type: String,
        required:true
    }
})

const mealmodel = mongoose.model('meal', mealSchema)
