import axios from 'axios';

const getAllMeals = async (setMeal) => {
 try {
axios.get('http://localhost:7000')
.then(({data}) =>{console.log(data)
setMeal(data)
})
}catch (err) {
    console.log(err);
   }
}

const addMeal = (title,setTitle,setMeal) =>{
    try {
    axios.post('http://localhost:7000/saveMeals',{title})
    .then((data)=>{
        console.log(data)
       setTitle("") 
       getAllMeals(setMeal)
    })
}  catch (err) {
    console.log(err);
   }
}

const editMeal = (mealId,title,setTitle,setMeal,setEditing) =>{
    try {
    axios.put('http://localhost:7000/editMeal',{_id:mealId,title})
    .then((data)=>{
        console.log(data)
    setTitle("") 
    setEditing(false)
    getAllMeals(setMeal)
    })
}  catch (err) {
    console.log(err);
   }
} 

const deleteMeal = (_id,setMeal) =>{
    try {
    axios.delete(`http://localhost:7000/deleteMeal/${_id}`)
    .then((data)=>{
        console.log(data)
    getAllMeals(setMeal)
    })
}  catch (err) {
    console.log(err);
   }
} 



export { getAllMeals, addMeal, editMeal, deleteMeal  };