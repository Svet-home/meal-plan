 const { findByIdAndUpdate } = require("./MealModel");

const MealModel = require(`./MealModel`)

module.exports.getMeal = async (req,res) =>{

try {
    const myMeal = await MealModel.find();
   res.status(200).send(myMeal);
} catch (err) {
    console.log(err)
}  

}

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

module.exports.deleteMeal = async(req,res) => {

try{
    const { _id } = req.params
console.log(req);
    console.log(_id);
    const meal = await MealModel.deleteOne( { _id : req.params.id } );
    return res.json({ msg: 'Параметр удален', meal });
  }

catch (error) {
    res.status(400).json({message: error.message})
}
}

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
