import Header from "./Header"
import {useState} from 'react'
import { Form } from "react-bootstrap";

function AddProduct(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    async function addProduct(){
        console.warn(name,file,price,description)
        const fromData= new FormData();
        fromData.append('file',file);
        fromData.append('price',price);
        fromData.append('name',name);
        fromData.append('description',description);
        let result=await  fetch("http://127.0.0.1:8000/api/addProduct",{
            method:"POST",
            body:fromData
        });
        alert("Data has been saved")
    }
    return(
        <div>
            <Header/>
        <h1>Add Product</h1>
        <div className="col-sm-5 offset-sm-3">
            <br/>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="name"/><br/>
            <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} placeholder="file"/><br/>
            <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} placeholder="price"/><br/>
            <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="description"/><br/>
            <button onClick={addProduct} className="btn btn-primary">Add Button</button>
        </div>
    </div>
    )
  
}
export default AddProduct