import { Navbar, Nav } from "react-bootstrap";
import { navitems } from './navItems'
import { 
   Link
} from "react-router-dom";
const NavbarComponent = ()=>{
   return(
      
    <Navbar
       bg="dark" 
       variant="dark" 
       fixed="top" 
       expand="lg" 
       collapseOnSelect>

       <Navbar.Brand>
          imani brown
       </Navbar.Brand>
       <Navbar.Toggle/>
        <Navbar.Collapse>
             <Nav>
                 {navitems.map((data)=>{
                     return(
                        <Nav.Link as={Link} key={data.id} to={data.path}>
                            {data.title}
                        </Nav.Link>
                     )
                 })}
             </Nav>
        </Navbar.Collapse>
      </Navbar>
     
   );
}
export default NavbarComponent;