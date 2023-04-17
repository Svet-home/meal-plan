import "./App.css";
import { MyMeals } from "./MyMeals";

import { useState, useEffect } from "react";
import {
  getAllMeals,
  addMeal,
  editMeal,
  deleteMeal,

  BASE_URL,
  EDIT_MEAL_URL,
  ADD_MEAL_URL,
} from "./FetchMeals";
import axios from "axios";


function App() {
  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");
  const [values, setValues] = useState({
    name: "",
    email:"",
    message:""
 });
 const onChange = (e) =>{
  setValues({
   ...values,
   [e.target.name]:e.target.value
   })
 }
  const fetchMeals = async () => {
    const { data } = await axios.get(BASE_URL);
    setMeal(data);
  };

  const addMeals = async (title) => {
    if (title !== "") {
      const { data } = await axios.post(ADD_MEAL_URL, { title });
      setTitle("");
      setMeal((current) => [...current, data]);
    }
  };

  const editMeals = async (mealId, title) => {
    if (title !== "") {
      const { status } = await axios.put(EDIT_MEAL_URL, { _id: mealId, title });
      if (status === 200) {
        const updatedMeals = myMeal.map((meal) =>
          meal._id === mealId ? { ...meal, title } : meal
        );
        setMeal(updatedMeals);
        setEditing(false);
        setTitle("");
        setMealId("");
      }
    }
  };

  const deleteMeals = async (mealId) => {
    await deleteMeal(mealId);
    setMeal((current) => current.filter((meal) => meal._id !== mealId));
  };

  const handleAddMeals = () => {
    if (title.trim() !== "") {
      addMeals(title);
    }
  };
  const handleEditMeals = () => {
    if (title.trim() !== "") {
      editMeals(mealId, title);
    }
  };

  const buttonCheck = !editing ? handleAddMeals : handleEditMeals;

  useEffect(() => {
    fetchMeals();
  }, []);

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setMealId(_id);
  };

  const onSubmit = async (e) => {
e.preventDefault()
try {
  const massege = {
    name: values.name,
    email: values.email,
    message: values.message 
  }

  const respt = await axios.post(`https://meal-plan-svet-home2.onrender.com/saveMessage`, massege)
if(respt.status ===200){
  setValues({
    name: "",
    email:"",
    message:""
 });
}

} catch (error) {
  console.log(error);
}
  }
  return (
    <div>
      <h1 className="header">ПЛАН ПИТАНИЯ</h1>
      <input
        type="text"
        placeholder="добавь еду"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={buttonCheck}>{editing ? "Редактировать" : "Добавить"}</button>

      <h2 className="form">ОБРАЩЕНИЕ</h2>

<form onSubmit={onSubmit} >

    <div>
       <input name="name"
       onChange={onChange}
       value={values.name} 
       placeholder="твое имя "
       />
    </div>

    <div>
        <input name="email"
        value={values.email} 
        onChange={onChange}
        placeholder="твой email"
        />
    </div>

    <textarea 
    name="message"
    value={values.message} 
    onChange={onChange}
    id=""
    cols="30"
    rows="10">
    </textarea>

    <div>
    <button>Отправить</button>
    </div>
</form>

      {myMeal.map((meal) => (
        <MyMeals
          key={meal._id}
          text={meal.title}
          updatingInInput={() => updatingInInput(meal._id, meal.title)}
          deleteMeal={() => deleteMeals(meal._id)}
        />
      ))}
    </div>
  );
}

export default App;



