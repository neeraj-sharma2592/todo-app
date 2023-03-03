

const Employee=(props)=>{

    return(
        <div>
            <h1>Name: {props.emp.name}</h1>
            <h1>Role: {props.emp.role}</h1>
        </div>
    )
}

export default Employee;