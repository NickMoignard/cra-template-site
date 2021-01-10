import React, { useState} from 'react'
//import PropTypes from 'prop-types'


// =================================================================
// ROUTER
// =================================================================
import { Link } from 'react-router-dom'

// =================================================================
// BOOTSTRAP COMPONENTS
// =================================================================
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import Navbar from 'react-bootstrap/Navbar'
import { Typeahead } from 'react-bootstrap-typeahead'


const Header = props => {



    const [singleSelections, setSingleSelections] = useState([]);
    var options = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Miles'},
        {id: 3, name: 'Charles'},
        {id: 4, name: 'Herbie'},
    ]
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Landing" >Landing</Nav.Link>
            </Nav>
            <Form className="d-md-block d-none" inline>
                <InputGroup>    
                    <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        onChange={setSingleSelections}
                        options={options}
                        placeholder="Search"
                        selected={singleSelections}
                    />
                    <InputGroup.Append>
                        <Button
                            onClick={
                                () => { console.log("Search Clicked");}
                            }
                            variant="outline-secondary"
                            >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </Navbar>
    )
}

Header.propTypes = {

}

export default Header
