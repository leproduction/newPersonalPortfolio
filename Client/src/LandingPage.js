import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [toggle,setToggle]= useState(true);
  const [info, setInfo]= useState("");
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://new-personal-portfolio-youh.vercel.app/submit', {
        email,
        name,
        tel
      });

      if (response.status === 200) {
        console.log("Submitted Successfully All information");
        setInfo("Submitted Successfully");
      } else {
        console.log("server Error");
        setInfo("Server Error");
      }
    } catch (error) {
      console.log("submission problems", error);
      setInfo("Submission Problems");
    }

    setEmail('');
    setName('');
    setTel();
  };

  return (
    toggle?
    <Container className='vw-50 vh-50 p-1'>    <Container style={{backgroundImage:`url('https://images.pexels.com/photos/5278747/pexels-photo-5278747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}} fluid className=' border border-info position-absolute vw-50 vh-50  top-50 start-50 translate-middle shadow'>
    <Button onClick={()=>setToggle(!toggle)} variant="outline-light position-absolute top-0 start-0">X</Button>
  <br></br>
    <Row><h1>{info}</h1></Row>
      <Form onSubmit={handleSubmit} className=' p-4 rounded' variant="outline-dark mx-auton">
        <Form.Label className='text-light'>Feel free to leave your contact below. I will get back to you ASAP!</Form.Label>
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formTel">
          <Form.Control type="tel" pattern='[0-9]{10}' placeholder="954-123-4567" value={tel} onChange={(e) => setTel(e.target.value)} required />
        </Form.Group>
        <Button variant="outline-light" className='my-2' type="submit">Submit</Button>

        <Form.Text className="text-light mx-1">
          By submitting, you agree to our policy.
        </Form.Text>
      </Form>

  </Container></Container>:null

  );
}
