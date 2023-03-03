import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'


const Todo=(props)=>{
    const [show,setShow]=useState(false);
    const [value,setValue]=useState(props.todo.value);
    
    const onChange=(event)=>{
        setValue(event.target.value);
    }

    return(
        <div>
            <div className="container">
                <div className="row m-3">
                    <div className="col-md-1">
                        {props.index}
                    </div>
                    <div className="col-md-1">
                        <input type="checkbox" 
                        checked={props.todo.isDone}
                        onChange={()=>props.handleDone(props.todo.id)}
                        />
                    </div>
                    <div 
                    style={{textDecoration:props.todo.isDone?'line-through':''}}
                    className="col-md-6">
                        {props.todo.value}
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning"
                        onClick={()=>setShow(true)}
                        >Edit</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger"
                        onClick={()=>props.delete(props.todo.id)}
                        >Delete</button>
                    </div>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header>Edit Todo Value</Modal.Header>
                <Modal.Body>
                    <input type="text" className='form-control'
                    placeholder={props.todo.value}
                    onChange={onChange} />    
                </Modal.Body>  
                <Modal.Footer>
                    <button className='btn btn-light'
                    onClick={()=>setShow(false)}
                    >Cancel</button>
                    <button className='btn 
                    btn-success'
                    onClick={()=>{props.handleEdit(value,props.todo.id);
                    setShow(false);
                    }}
                    >Done</button>
                </Modal.Footer>  
            </Modal>

        </div> 
    )
}

export default Todo;