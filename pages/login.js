import styled from "styled-components"
import Image from "next/image";

export default function LoginPage(){

return(
        <StyledLoginWrapper>
            <StyledLoginContainer>
                <StyledImageContainer>
                    <Image src="/logo-main.svg" width={150} height={130} alt="avatar" />
                </StyledImageContainer>
                <StyledFormContainer>
                    <StyledInputContainer>
                        <label htmlFor="PlantName">Email:</label>
                        <StyledInput
                            id="plantName"
                            name="name"
                            type="text"
                            placeholder="e.g. Monstera"
                            defaultValue="Admin@rooted.com"
                            onChange={() => {setShowErrorMessageName(false)}}           
                        ></StyledInput>
                        <label htmlFor="PlantName">Password:</label>
                        <StyledInput
                            id="plantName"
                            name="name"
                            type="text"
                            placeholder="e.g. Monstera"
                            defaultValue="Admin@rooted.com"
                            onChange={() => {setShowErrorMessageName(false)}}           
                        ></StyledInput>
                    </StyledInputContainer>
                    <StyledLoginbutton type="submit">Login</StyledLoginbutton>
                </StyledFormContainer>
                <StyledTextContainer>
                    <p>forgot your password?</p>
                    <p>you don't have an account?</p>
                </StyledTextContainer>
            </StyledLoginContainer>
            
        </StyledLoginWrapper>
)

}

const StyledLoginWrapper = styled.section`
    background: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute; 
    background-size: cover;
    z-index: 1000;
    align-items: center;
    justify-content: center;
`;
const StyledLoginContainer = styled.section`
    position: relative;
    width: 250px;
    height: auto;
    max-height: 670px;
    left: 0;
    right: 0;
`;
const StyledImageContainer = styled.section`
    width: 100%;
    height: 150px;
    background: var(--green-main);
    display: flex;
    justify-content: center;
    border-radius: 25px 25px 0 0;
`;
const StyledFormContainer = styled.section`
    width: 100%;
`;
const StyledInputContainer = styled.div `
    background-color: var(--white);
    border-radius: 25px;
    width: 100%;
    padding: 20px 5px;
    margin-top: -20px;
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
`;
const StyledInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  font-family: inherit;

  background-color: rgba(0,0,0,0.1);
  border: 2px solid ${props => props.theme.main};

  &:focus {
    outline-color: var(--green-light);
  }
`;
const StyledLoginbutton = styled.button `
    width: 250px;
    margin-top: 30px;
    border: none;
    background: var(--green-main);
    padding: 16px;
    border-radius: 30px;
    color: var(--gold);
    font-family: Assistant, sans-serif;
    font-weight: bold;
    font-size: 18px;
`;
const StyledTextContainer = styled.div `
    font-size: 14px;
    margin-top: 30px;
`;