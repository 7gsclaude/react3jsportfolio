import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: flex-end;
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
`;

const Form = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 25px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #fc8b9e;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;



const Contact = () => {

const ref = useRef();
const [success, setSuccess] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4wee3nv",
      "template_0cnhqyn",
      ref.current,
      "XnU9w1Izyj6h3TFUO"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );
};

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Message" name="message"row={10} />
                      <Button type="submit">Send</Button>
                        {success && <span>Thanks, I'll reply ASAP</span>}
          </Form>
        </Left>
        <Right>coral</Right>
      </Container>
    </Section>
  );
};

export default Contact;
