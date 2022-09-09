import React from 'react';
import styled from 'styled-components';
import Earnings from './Earnings';
import Info from './Info';
import Invoices from './Invoices';
import JoinSlack from './JoinSlack';
import Navbar from './Navbar';
import ProjectRecomendation from './ProjectRecomendation';
import Projects from './Projects';


function MainContent() {
  return (
    <ContainerMain>
        <Navbar/>
        <SubContainerMain>
            <SectionA>
                <ColumnA1>
                    <Earnings/>
                    <Info/>
                </ColumnA1>
                <ColumnA2>
                <TitleText>Your Projects</TitleText>
                <Projects/>
                </ColumnA2>
            </SectionA>
            <SectionB>
                <ColumnB1>
                    <InvoicesContainer>
                        <TitleText>Recent Invoices</TitleText>
                        <Invoices/>
                    </InvoicesContainer>
                    <JoinSlack/>
                </ColumnB1>
                <ColumnB2>
                <TitleText>Recommended Projects</TitleText>
                <ProjectRecomendation/>
                </ColumnB2>
            </SectionB>
        </SubContainerMain>
    </ContainerMain>
  )
}

const ContainerMain = styled.div`
    width: 80%;
    background: linear-gradient(to bottom right, white 0% right, #e6e4ff 70% );
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin: 1rem 8rem 1rem 4rem;
    @media screen and (min-width: 320px) and (max-width:1080px){
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0 ;
}

`;

const SubContainerMain = styled.div`
margin: 0.5rem 0;
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
gap: 4rem;
@media screen and (min-width: 320px) and (max-width:1080px){
    height: 100%;

}
`;

const TitleText = styled.h3`
    height: 20%;

`;
const SectionA = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40%;
    gap: 2rem;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    align-items: center;
    height: max-content;

}
`;
const SectionB = styled.div`
    display: flex;
    gap: 2rem;
    height: 26vh;
    @media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    height: max-content;
    width: 100%;
    /* justify-content: center;
    align-items: center; */
}

`;
const ColumnA1 = styled.div`
    display: flex;
    gap: 3rem;
    @media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

}
`;
const ColumnA2 = styled.div`
display: flex;
flex-direction: column;
width: 90%;
@media screen and (min-width: 320px) and (max-width:1080px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
`;

const InvoicesContainer = styled.div`
height: 60%;
@media screen and (min-width: 320px) and (max-width:1080px){
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
`;


const ColumnB1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 115%;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width:1080px){
    height: max-content;
    justify-content: center;
    align-items: center;
}
`;
const ColumnB2 = styled.div`
    @media screen and (min-width: 320px) and (max-width:1080px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}
`;

export default MainContent