
import './App.css';
import Employee from './Employee';
import Counter from './Counter';
import { useState } from 'react';
import Todos from './components/Todos'

// function App() {
//   const employeeDetails=[{
//     name:"Aman",
//     role:"Developer"
//   },
//   {name: "Swati",
//   role:"Tester"
//   }
// ]
//   const [show, setShow]=useState(true);

//   return (
//     <div className="App">
//       {show==true?<Counter/>:''}
//       <button onClick={()=>setShow(false)}>Remove Counter Component</button>
//       {/* {employeeDetails.map((item,index)=>{
//        return <Employee key={index} emp={item}/>;
//       })} */}
//     </div>
//   );
// }


const App=()=>{
  return(
    <div className='App'>
      <Todos/>
    </div>
  )
}


export default App;
