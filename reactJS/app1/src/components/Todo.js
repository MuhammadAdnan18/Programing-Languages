// to get todo tasks from user we will use props.
//all code in this function are considered as plane html text so we use {} brackets to define code written in javascript as done in h2
import DeleteModle from "./DeleteModle";
import Backdrope from "./Backdrope";
import { useState } from "react";
//useState is used to make web interactive and perform different actions it devides diffferent components/functions/divs into different states and when state is called those functions are used
//use state works like boolean it stored 2 elements in its array

//<!---it means the use DeleteModle if the modalIsOpen else null--->
//{modalIClose &&<Backdrope/> /}

//now we need to decide when StateIsClosed should be used(cancel,confirm,backdrop) for this we god to these componets and code 
function Todo(props) {

//first call the useState method here and give it false since we dont wann use it form the start and store both elements conditions(for when modal is open and when it is closed)
//use the second element of array
const [modalIsOpen,setModalIsOpen]=useState(false);

//now write the code which deletes upon pressing delete button(in react we just add onClick attribute for this)
function deleteHandler(){
setModalIsOpen(true);
}

function closeDeleteModal(){
setModalIsOpen(false);
}



return(
<div className='card'>
    <h2>{props.text}</h2> 
<div className='actions'>
<button className='btn' onClick={deleteHandler}>Delete</button>
</div>
{modalIsOpen && (
<DeleteModle onCancel={closeDeleteModal} onConfirm={closeDeleteModal} />
)}
{modalIsOpen && <Backdrope onCancel={closeDeleteModal} />  }; 
</div>
);
}

export default Todo;