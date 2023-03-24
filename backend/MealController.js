// const mealSchema = require(`./MealModel`)


const mongoose = require('mongoose');
const mealSchema = new mongoose. Schema({
    title:{
        type: String,
        required:true
    }
})

const mealmodel = mongoose.model('meal', mealSchema)
//GET

module.exports.getMeal = async (req,res) =>{
try {
    console.log(req.body)
    const myMeal = await mealmodel.find();
    console.log(myMeal, '---------------');
    res.send(myMeal);
} catch (err) {
    console.log(err)
}    
}

//POST

module.exports.saveMeals = async(req,res) =>{
    try{
        console.log(req.body) 
        const { title } = req.body;
        mealmodel.create({ title })
        .then((data) => res.send(data))
        res.send({
            "status": "success"
        })
    } catch(err){
        console.log(err)  
}
}
