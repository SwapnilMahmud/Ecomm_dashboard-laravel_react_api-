import Header from "./Header"
import React,{useState,useEffect} from "react"
import {Table} from 'react-bootstrap'
function ProductList(){
    const[data,setData]=useState([]);
    useEffect(()=>{
      getData();    
    },[])
   
    async function deleteOperation(id)
    { 
      let result=await fetch("http://127.0.0.1:8000/api/delete"+id,{
        method:'DELETE'
      });
      result=await result.json();
      console.warn(result)
      getData();
    }

    async function getData(){
      let result=await fetch("http://127.0.0.1:8000/api/list");
      result=await result.json();
      setData(result)
    }
    return(
    <div>
        <Header/>
        <h1>ProductList</h1>


        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>             
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
   
  {
              data.map((item)=>
                <tr>
                    <td scope="row">{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img style={{width:100}} src={"http://127.0.0.1:8000/"+item.file_path}/></td>
                    <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
             </tr>
              )
          }
    
  </tbody>
</table>




      
    </div>);
};
export default ProductList