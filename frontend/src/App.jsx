
import './App.css';
import { MyMeals } from './MyMeals';
import { useState,useEffect } from 'react';
import { getAllMeals,addMeal,editMeal,deleteMeal } from './FetchMeals';


function App() {
  const [myMeal,setMeal] = useState([]);
  const[title,setTitle] = useState("")
  const[editing, setEditing] = useState(false)
  const[mealId,setMealId] = useState("")

  useEffect(() => {
    getAllMeals(setMeal)
   }, [])

const updatingInInput =(_id,title) =>{
  setEditing(true)
  setTitle(title)
  setMealId(_id)
}

return (
    <div >
      <h1>MEAL PLAN</h1>
      <input type="text"
       placeholder="add a meal"
       value ={title}
       onChange ={(e) => setTitle(e.target.value)}
       />
      <button
     
       onClick = 
      {editing ? () => editMeal(mealId,title,setTitle,setMeal,setEditing):() => addMeal(title,setTitle,setMeal) }>
      {editing ? "Edit" : "Add"}
      </button>

    {/*<MyMeals text="We got here"/>*/}

    {myMeal.map((meal) => <MyMeals text={meal.title} key = {meal._id}
    updatingInInput = {() => updatingInInput(meal._id,meal.title)}
    deleteMeal = {() => deleteMeal(meal._id,setMeal)}
    />
    )}

</div>
  );
}

export default App;
