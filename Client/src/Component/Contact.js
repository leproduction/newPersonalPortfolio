import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
const contact = [ {
    name: "Hau Le",
    phone: "954-842-9190",
    email: "haule.jan.20@gmail.com"
}]
export default function ContactEmer() {
  return (

    <Container  id="footer" style={{ background: "rgba(189,195,199, 0.3)" }}  align="center" fluid className='shadow rounded mx-0 my-1 py-3'>
        { contact.map(mycontact => (<Row key={mycontact.email}>
            <Col><p>{mycontact.name}</p>
            </Col>
            <Col ><a className='text-decoration-none' href="tel:954-842-9190"><p className='text-black'>{mycontact.phone}</p></a>
            </Col>
            <Col><a className='text-decoration-none' href="mailto:haule.jan.20@gmail.com"><p className='text-black'>{mycontact.email}</p></a>
            </Col>
        </Row>))}
    </Container>

  )
}

