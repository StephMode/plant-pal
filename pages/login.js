import styled from "styled-components"
import Image from "next/image";

export default function LoginPage(){

return(
        <StyledLoginWrapper>
            <StyledLoginContainer>
                <Image src="/logo-main.svg" width={150} height={150} alt="avatar" />
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
                <button type="submit">Login</button>
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
    width: 250px;
    height: auto;
    max-height: 670px;
    left: 0;
    right: 0;
    background: red;
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