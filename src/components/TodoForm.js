import React, {useState} from 'react';

const TdodoForm = ({addNewTodo})=>{
    
    const [addTodo, setAddTodo] = useState("")
    
    const handleTodo = (e) =>{
        e.preventDefault()
        
        addNewTodo(addTodo)
        
        setAddTodo("")
        
    }
    
    
    return(
        <form onSubmit={handleTodo}>
            <div className="card card-body">
                <label>Ajouter todo</label>
                <input className="form-control" value={addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)}/>
                <input className="btn btn-success" type="submit"/>
                
            </div>
        </form>
    )

}

export default TdodoForm;