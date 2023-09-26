import Logo from "./assets/logo.svg";
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  font-weight:400;
`;

const Paragraph = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Span = styled.span`
  font-size: 24px;
  font-weight:700;
  margin-left:7px;
  
`;

function App() {
  return (
    <CenteredContainer>
      <img src={Logo} alt="Logo" />
      <Title>
        We are launching
        <Span>soon!</Span>
      </Title>
      <Paragraph>Subscribe and get notified</Paragraph>
    </CenteredContainer>
  );
}

export default App;

