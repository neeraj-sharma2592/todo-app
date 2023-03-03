import { useEffect, useState } from "react";


const Counter=()=>{
    // console.log("CounterComponent");
    let [counter,setCounter]=useState(0);
    let [name,setName]=useState("Wasim");
    let [data,setData]=useState(null);
    // if(name=="Wasim"){
    //     let [address,setAddress]=useState("SomeAddress");
    // }

    const increment=()=>{
        setCounter(counter+1)
    }

    const decerement=()=>{
        setCounter(counter-1)
    }

    useEffect(()=>{
        setTimeout(()=>{
                        setData({name:"Tauseef",age:24})
                        console.log("Ajax call happened again")
                    },3000)
        let interval= setInterval(()=>{
            console.log("Interval is getting called");
        },1000)       
        
        return ()=>clearInterval(interval);
    },[])

    // const getData=()=>{
    //     //// ajax call
    //     //     setTimeout(()=>{
    //     //         setData({name:"Tauseef",age:24})
    //     //         console.log("Ajax call happened again")
    //     //     },3000);
    // }

    // getData();
    return(
        <div>
            <h1>{counter}</h1>
            <button className="btn btn-primary m-3 p-3"
            onClick={increment}
            >+</button>
            <button className="btn btn-primary m-3 p-3"
            onClick={decerement}
            >-</button>
            <div>{JSON.stringify(data)}</div>
            <button onClick={()=>setName("NameChanged")}>Change Name</button>
        </div>
    )
}

export default Counter;