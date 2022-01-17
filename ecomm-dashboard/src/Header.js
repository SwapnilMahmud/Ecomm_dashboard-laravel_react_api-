import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
function Header(){
    let user=JSON.parse(localStorage.getItem('user-info'))
    //console.warn(user)
    const history=useHistory();
    function logOut(){
        localStorage.clear();
        history.push("/register");
    }
    return(
    <div>   
        <Navbar bg="dark" variant="dark">   
        <Navbar.Brand href="#home">E-comm</Navbar.Brand>            
            <Nav className="mr-auto navbar_wrapper">

                {

                    localStorage.getItem('user-info')?
                    <>
                    <Link to="/">Product List</Link>
                     <Link to="/add">Add Products</Link>
                    <Link to="/update">Update Products</Link>
                    </>
                    :
                    <>
                     <Link to="/login">Login</Link>
                     <Link to="/register">Register</Link>
                    </>

                }
               
            </Nav>   
            {localStorage.getItem('user-info')? 
            <Nav>
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    <NavDropdown.Item >Profile</NavDropdown.Item>

                </NavDropdown>
            </Nav>
            :null}
        </Navbar>   
    </div>
    )

}
export default Header