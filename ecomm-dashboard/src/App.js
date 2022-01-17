import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import ProductList from './ProductList';
function App() {
  return (
    <div className="App">
      <Router>             
        <Switch>
            <Route  path="/login">
                  <Login/>
            </Route>
            <Route  path="/register">
                  <Register/>
            </Route>
            <Route  path="/add">
                  <Protected Cmp={AddProduct}/>
                  {/* <AddProduct/> */}
            </Route>
            <Route  path="/update">
                  <Protected Cmp={UpdateProduct}/>
                  {/* <UpdateProduct/> */}
            </Route> 

            <Route  path="/">
                  <Protected Cmp={ProductList}/>
                  {/* <UpdateProduct/> */}
            </Route>       
        </Switch>       
      </Router>   
    </div>
  );
};

export default App;
