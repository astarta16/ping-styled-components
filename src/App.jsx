import Logo from "./assets/logo.svg";
import styled from "styled-components";
import MainImage from "./assets/illustration-dashboard.png";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 300;
`;

const Paragraph = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Span = styled.span`
  font-size: 48px;
  font-weight: 700;
  margin-left: 7px;
`;

const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 421px;
  gap: 10px;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 28px;
  border: 1px solid #c2d3ff;
  background: #fff;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  border: none;
  border-radius: 28px 0 0 28px;
  padding: 0 20px;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  width: 150px;
  height: 56px;
  border-radius: 28px;
  background: #4c7bf3;
  box-shadow: 0px 5px 10px 2px rgba(76, 123, 243, 0.23);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const StyledLogo = styled.img`
  width: 80px;
  height: 40px;
  margin-top: 130px;
`;

const StyledMainImage = styled.img`
  max-width: 90%;
  height: auto;
  margin-top: 20px;
`;

function App() {
  return (
    <CenteredContainer>
      <StyledLogo src={Logo} alt="Logo" />
      <Title>
        We are launching
        <Span>soon!</Span>
      </Title>
      <Paragraph>Subscribe and get notified</Paragraph>
      <InputButtonContainer>
        <InputContainer>
          <Input type="text" placeholder="Enter text here" />
        </InputContainer>
        <Button>Notify me</Button>
      </InputButtonContainer>
      <StyledMainImage src={MainImage} alt="Main Image" />
    </CenteredContainer>
  );
}

export default App;
