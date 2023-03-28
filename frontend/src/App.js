
import './App.css';
import { MyMeals } from './MyMeals';
import {useState,useEffect } from 'react';
import { getAllMeals } from './FetchMeals';


function App() {
  const [myMeal,setMeal] = useState([])

  useEffect(() => {
    getAllMeals(setMeal)
   }, [])

return (
    <div>
      <h1>MEAL PLAN</h1>
      <input type="text" placeholder="add a meal"/>
      <button>Add</button>

    {/*<MyMeals text="We got here"/>*/}

    {myMeal.map((meal) => <MyMeals text={meal.title}/>
    )}

</div>
  );
}

export default App;
