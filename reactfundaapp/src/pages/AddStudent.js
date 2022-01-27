import React,{Component} from "react";
import {Link} from 'react-router-dom';
class AddStudent extends Component{
    render(){         
        return(
            <div className="container">
                <div className="row"> 
                  <div className="col-md-12">
                      <div className="card">
                          <div className="card-header">
                               <h4> Add Student
                                   <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add Student</Link>
                               </h4>
                          </div>
                          <div className="card-body">
                              <form>
                                  <div className="form-group mb-3">
                                      <label>
                                          <input type="text" name="" value=""/>
                                      </label>

                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        );
    }       
}
export default AddStudent