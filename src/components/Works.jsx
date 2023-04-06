import React from 'react'
import styled from 'styled-components';
import WebDesign from './WebDesign';
import GameDev from './GameDev';
import ReefKeeper from './ReefKeeper';


const data = [
    "Web Design",
    "Game Dev",
    "Reef Keeper",
]


const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  position: relative;
`;
//video  has width at 1400px i used 100% to make it respoohsive
const Container = styled.div`
 width: 90%;
 display: flex;
justify-content: space-between;
`;

const List = styled.ul`
 list-style: none;
display: flex;
flex-direction: column;
gap: 20px;

`;
const ListItems = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    color: #dc13ad;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
    }
  }
`;

const Left = styled.div`
flex: 1;
display:flex;
align-items: center;


`;
const Right = styled.div`
flex: 1;

`;

const Works = () => {
    const [work,setWork] = React.useState("Web Design")
    return (
      <Section>
        <Container>
          <Left>
            <List>
            {data.map((item) => (
                <ListItems key={item} text={item} onClick={()=>setWork(item)}>
                    {item}
                </ListItems> 
            ))}
            </List>
            
          </Left>
                <Right>
                    {work === "Web Design" ? (<WebDesign/>) : work === "Game Dev" ? (<GameDev/>) : (<ReefKeeper/>)}
          </Right>
        </Container>

      </Section>
    );
}

export default Works