import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export const MyMeals = ({text,editMyText,deleteMyMeal}) => {
    return(
<div>
   <p>{text}</p> 

   <AiFillEdit onClick={editMyText}></AiFillEdit>
   <AiFillDelete onClick={deleteMyMeal}></AiFillDelete>
</div>
    )
}