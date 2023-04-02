import React from 'react'
import styled from 'styled-components';


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

const Form = styled.h1`
display: flex;
width: 500px;
flex-direction: column;
gap:25px;

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
    return (  
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>
                            contact Me
                        </Title>
                        <Input placeholder="Name" />
                        <Input placeholder="Email" />
                        <TextArea placeholder="Message" row={10} />
                        <Button>Send</Button>
                </Form>
                </Left>
                <Right>

                </Right>
            </Container>
        </Section>);
}

export default Contact