import React, {useState} from "react";
import TodoForm from './TodoForm';
import {v1 as uuid} from "uuid"; 


const Todo = () =>{

	const [todos, setTodos] = useState([
		{id:1, todo:"Lek thieep"},
		{id:2, todo:"naan fonde"},
		{id:3, todo:"teud nelaw"}
	])
    
    const addNewTodo = (newTodo) =>{
        
        warning && setWarning(false);
        
        if(newTodo !==''){
            setTodos([...todos,{
            id: uuid(),
            todo:newTodo
        }])
        }else{
            setWarning(true)
        }
        
        
    }

    const [warning, setWarning] = useState(false);
	const myTodo = todos.map(todo =>{
		return(
			<li className="list-group-item" key={todo.id}>{todo.todo}</li>
		)
	})
    
    const warningMsg = warning && <div className="alert alert-danger" role="alert mt5">Veuiller indiquer un Todo</div>

	return(

			<div>
        {warningMsg}
				<h1 className="text-center">{todos.length} ToDo</h1>
				<ul className="list-group">
					{myTodo}
				</ul>
            <TodoForm addNewTodo={addNewTodo}/>
            
			</div>
		)
}

export default Todo;