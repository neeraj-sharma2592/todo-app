import { useState } from "react";

const AddTodo=(props)=>{
    const [value,setValue]=useState('')

    const onSubmit=(event)=>{
        event.preventDefault();
        props.addTodo(value);
        setValue('')
    }

    const onChange=(event)=>{
        setValue(event.target.value)
    }

    return(
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                <div className="col-md-9">
                     <input 
                     type="text" 
                     value={value}
                     onChange={onChange}
                     className="form-control"/>

                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-success">AddTodo</button>
                </div>

                </div>

            </form>
        </div>
    )
}

export default AddTodo;