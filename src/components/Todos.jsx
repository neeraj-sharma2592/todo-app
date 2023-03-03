import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos=()=>{
    const [todos,setTodos]=useState(
        localStorage.getItem("todos")?
        JSON.parse(localStorage.getItem("todos")):
        []
    )

    const addNewTodo=(todoValue)=>{
      if(todoValue){
         const todoArr=[...todos];
         todoArr.push({
            id:new Date().getTime(),
            value:todoValue,
            isDone:false
         })

         updateState(todoArr);
      }
    }    

    const handleDone=(todoId)=>{
        const todoArr=[...todos];
        todoArr.map(item=>{
            if(item.id==todoId){
                item.isDone=!item.isDone
            }
            return item;
        })
        updateState(todoArr);
    }

    const handleEdit=(value, todoId)=>{
        const todoArr=[...todos];
        todoArr.map(item=>{
            if(item.id==todoId){
                item.value=value
            }
            return item;
        })
        updateState(todoArr);
    }

    const onDelete=(todoId)=>{
       const todoArr=todos.filter(item=>item.id!=todoId);
       updateState(todoArr);
    }

    const updateState=(todos)=>{
        setTodos(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
    }

    return(
       <div className="container">
            <h1>TodosApp</h1>
            {
                todos.length==0?"No todos are present":
                todos.map((item,index)=>{
                    return <Todo key={index}
                    todo={item}
                    delete={onDelete}
                    handleDone={handleDone}
                    handleEdit={handleEdit}
                    index={index+1}
                    />
                })
            }
            <AddTodo addTodo={addNewTodo} />
       </div>
    )
}

export default Todos;