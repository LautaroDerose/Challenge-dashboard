import React from 'react'
import styled from 'styled-components';
import { darkThemeColor, hoverEffect, themeColor } from '../utils'
import { FaSlack } from 'react-icons/fa';



function JoinSlack() {
  return (
    <ContainerJoinSlack>
        <CardContent flex={true}>
            <Slack>
                <SlackLogo>
                    <FaSlack/>
                </SlackLogo>
                <SlackText>
                    <SlackHead>Engage with Clients</SlackHead>
                    <SlackFooter>Join Slack channel</SlackFooter>
                </SlackText>
            </Slack>
            <SlackJoin>Join now</SlackJoin>
        </CardContent>
    </ContainerJoinSlack>

  )
}

const ContainerJoinSlack = styled.div`
background-color: ${darkThemeColor};
height: 50%;
width: 100%;
margin-top: 7.5rem;
border-radius: 1rem;
display: flex;
align-items: center;
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
@media screen and (min-width: 320px) and (max-width:1080px){
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: max-content;
}
`;

const CardContent = styled.div`
margin: 1rem;
width: 100%;
display: flex;
justify-content: center;
@media screen and (min-width: 320px) and (max-width:1080px){
  flex-direction: column;
  gap: 1rem;
}
`;

const Slack = styled.div`
display: flex;
`;

const SlackLogo = styled.div`
margin-right: 0.7rem;
display: flex;
justify-content: center;
align-items: center;
svg {
    color: white;
    height: 3rem;
    width: 3rem;
}
`;
const SlackText = styled.div`
color: white;
`;

const SlackHead = styled.h2`
font-weight: 500;
`;

const SlackFooter = styled.h5`
color: #e4e4e4;
font-weight: normal;
`;

const SlackJoin = styled.button`
background-color: ${themeColor};
border: none;
outline: none;
padding: 1rem 2rem;
color: white;
border-radius: 0.5rem;
font-size: 1.2rem;
font-weight: bold;

`;

export default JoinSlack