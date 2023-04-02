import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
   //inside video it calls for 1400px width but I changed it to 100% to make it responsive
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
height: 50px;
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

`
const ListItem = styled.li`
    
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #fc8b9e;  
  color: white;
  border: none;
    border-radius: 5px;
    cursor: pointer;
`


const Navbar = () => {
  return (
    <Section>
          <Container>
              <Links>
                  <Logo src="./img/websitelogo.jpeg" /> 
                  <List> 
                      <ListItem>Home</ListItem>
                      <ListItem>Who</ListItem>
                      <ListItem>Works</ListItem>
                      <ListItem>Contact</ListItem>
                      
                  </List>
              </Links>
              <Icons> 
                  <Icon src="./img/search.png" />
                  <Button>Hire Now</Button>
              </Icons>
              
      </Container>
    </Section>
  );
}

export default Navbar