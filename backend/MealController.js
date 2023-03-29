 const { findByIdAndUpdate } = require("./MealModel");

const MealModel = require(`./MealModel`)

//GET

module.exports.getMeal = async (req,res) =>{
try {
    const myMeal = await MealModel.find();
  
    res.status(200).send(myMeal);
} catch (err) {
    console.log(err)
}    
}

//POST

module.exports.saveMeals = async(req,res) =>{

try {
    const { title } = req.body;

    MealModel.create({title})
    .then((data) => { console.log('meal added');
    res.send(data)
 })    

}
catch (error) {
    res.status(400).json({message: error.message})
}
}

//Delete

module.exports.deleteMeal = async(req,res) => {

try{
    const { _id } = req.body
    MealModel.findByIdAndDelete(_id)
    .then(() =>res.send(`Deleted a meal`))
}

catch (error) {
    res.status(400).json({message: error.message})
}
}

//iDET(PUT)

module.exports.editMeal =async(req,res) =>{

   try{
    const{ _id,title } = req.body
    MealModel.findByIdAndUpdate(_id,{title})
    .then(() => res.send (`Edited a meal`))
   } 

   catch (error) {
    res.status(400).json({message: error.message})
} 
}
