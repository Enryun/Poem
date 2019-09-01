import React, {useContext} from 'react';
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Form, Button, FormControl} from 'react-bootstrap';
import {FaHome} from 'react-icons/fa';
import './Navbar.styles.scss';
import {PoemContext} from '../../ContextAPI';

const NavbarComponent = () => {

  const value = useContext(PoemContext);
  const {handleChange} = value;
  
  return (
    <NavStyle>
      <Navbar>

        <Navbar.Brand href="/" className='navBar'><FaHome size={30}/></Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/donate">Donate</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            onChange={handleChange}
          />
          <Button variant="outline-info">Add</Button>
        </Form>

      </Navbar>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
`

export default NavbarComponent;


