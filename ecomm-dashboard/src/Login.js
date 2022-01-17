import React,{useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import Header from "./Header"


function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    useEffect(()=>{
       
        if(localStorage.getItem('user-info')){
            history.push("/add")
        }

    },[])
    async function login(){
     console.warn(email,password);
     let item={email,password};
     let result=await fetch("http://127.0.0.1:8000/api/login",{
        method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
     });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
    }
    return(
        <div>
             <Header/>
            <h1>Login Page</h1>
            <div className="col-sm-4 offset-sm-4" >
                <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                <br/><input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                 <br/><button className="btn btn-primary" onClick={login}>Login</button>

            </div>
        </div>
    )
}
export default  Login