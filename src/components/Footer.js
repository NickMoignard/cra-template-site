import React from 'react'
// import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer = props => {
    return (
        <Container className="footerContainer" fluid>
            <Row>    
                <Col className="left">Left</Col>
                <Col className="center">Center</Col>
                <Col className="right">Right</Col>
            </Row>
        </Container>
    )
}

// Footer.propTypes = {

// }

export default Footer
