import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, ProgressBar, Container} from 'react-bootstrap'
export default function ProgressiveBar() {
  return (
    <Container style={{ background: "rgba(189,195,199, 0.3)" }}  fluid className='shadow rounded mx-auto'>
    <Row sm={1} md={2}>
    <Row align="center" className='gap-1 my-3 mx-auto px-5'>
    <ProgressBar now={95} animated variant='secondary' />HTML
    <ProgressBar now={95} animated variant='secondary' />CSS
    <ProgressBar now={90} animated variant='secondary' />Javascript
    <ProgressBar now={80} animated  variant='secondary'/>React
    <ProgressBar now={85} animated  variant='secondary'/>Bootstrap
    <ProgressBar now={60} animated  variant='secondary'/>Tailwind CSS
    <ProgressBar now={61} animated variant='secondary'/>MongoDB
    <ProgressBar now={60} animated variant='secondary'/>ExpressJS
    <ProgressBar now={65} animated variant='secondary' />NodeJS
    </Row>
    <Row>

    </Row>
    </Row>
    </Container>
  )
}
