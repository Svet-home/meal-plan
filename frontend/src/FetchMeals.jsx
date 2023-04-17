import axios from 'axios';

export const BASE_URL ='https://meal-plan-svet-home2.onrender.com'

export const ADD_MEAL_URL = `${BASE_URL}/saveMeals`
export const EDIT_MEAL_URL = `${BASE_URL}/editMeal`
export const DELETE_MEAL_URL = `${BASE_URL}/deleteMeal`

 const getAllMeals = async (setMeal) => {
    try {
   axios.get(BASE_URL)
   .then(({data}) =>{console.log(data)
   setMeal(data)
   })
   }catch (err) {
       console.log(err);
      }
   }
   
const addMeal = (title,setTitle,setMeal) =>{
       try {
       axios.post(ADD_MEAL_URL,{title})
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
       axios.put(EDIT_MEAL_URL,{_id:mealId,title})
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
       axios.delete(`${DELETE_MEAL_URL}/${_id}`)
       .then((data)=>{
           console.log(data)
       getAllMeals(setMeal)
       })
   }  catch (err) {
       console.log(err);
      }
   } 


export { getAllMeals, addMeal, editMeal, deleteMeal  };