import styled, { ThemeProvider } from "styled-components"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from 'react-hot-toast';

export default function LoginPage(){
const router = useRouter();
const adminPW = { email:"admin@rooted.com",password:"RootedFTW",}
const [loginErrorMessage,setLoginErrorMessage] = useState(false)
const [showInputError, setShowInputError] = useState(false);
const [loginMissingInputEmail,setLoginMissingInputEmail] = useState(false)
const [loginMissingInputPassword,setLoginMissingInputPassword] = useState(false)

function loginDataCheck (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.email === "") {
        toast.error("email is required");
        setLoginMissingInputEmail(true)   
    }
    else if (data.password === "") {
        toast.error("password is required");
        setLoginMissingInputPassword(true)
    }
    else if(data.email === adminPW.email & data.password === adminPW.password){
        setLoginErrorMessage(false)
        setShowInputError(false)
        router.push(`/home`);
    }
    else {
        setLoginMissingInputPassword(false)
        setLoginMissingInputEmail(false)
        setLoginErrorMessage(true)
        setShowInputError(true)

        toast.error("Wrong login credentials");
    }
}    

return(
        <StyledLoginWrapper>
            <StyledLoginContainer>
                <StyledImageContainer>
                    <Image src="/logo-main.svg" width={180} height={130} alt="avatar" />
                </StyledImageContainer>
                <StyledFormContainer onSubmit={() => loginDataCheck(event)}>
                    <StyledInputContainer>
                        <StyledH1>Login</StyledH1>
                        <label htmlFor="email">Email:</label>
                        <ThemeProvider theme={showInputError ? errorMessageInput : defaultThemeInput}>
                            <StyledInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="e.g. admin@rooted.com"
                                defaultValue="" 
                                onChange={() => {setShowInputError(false),  setLoginMissingInputEmail(false)}}
                            ></StyledInput>
                        </ThemeProvider>
                        <StyledErrorMessage>{loginMissingInputEmail && "Please provide an email."}&nbsp;</StyledErrorMessage>
                        <label htmlFor="password">Password:</label>
                        <ThemeProvider theme={showInputError ? errorMessageInput : defaultThemeInput}>
                            <StyledInput
                                id="password"
                                name="password"
                                type="password"
                                placeholder="e.g. RootedFTW"  
                                onChange={() => {setShowInputError(false),  setLoginMissingInputPassword(false)}}      
                            ></StyledInput>
                        </ThemeProvider>
                        <StyledErrorMessage>
                            {loginErrorMessage && <span>Password or Email is wrong</span>} <br/>
                            {loginMissingInputPassword && "Please provide a password"}&nbsp;
                        </StyledErrorMessage>
                    </StyledInputContainer>
                    <StyledLoginbutton type="submit">Login</StyledLoginbutton>
                </StyledFormContainer>
                <StyledTextContainer>
                    <p>
                        {loginErrorMessage ? "mail: admin@rooted.com / password: RootedFTW" : "Forgot your password? Do not have an account yet?"}
                    </p>
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
    color: var(--black);
`;
const StyledLoginContainer = styled.section`
    position: relative;
    width: 250px;
    height: auto;
    max-height: 670px;
    left: 0;
    right: 0;
    font-family: Assistant, sans-serif;
`;
const StyledImageContainer = styled.section`
    width: 100%;
    height: 150px;
    background: var(--green-main);
    display: flex;
    justify-content: center;
    border-radius: 25px 25px 0 0;
`;
const StyledFormContainer = styled.form`
    width: 100%;
`;
const StyledInputContainer = styled.div `
    background-color: var(--white);
    border-radius: 25px;
    width: 100%;
    padding: 1px 20px 12px 20px;
    margin-top: -20px;
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
`;
const StyledH1 = styled.h1`
    position: relative;
    color: var(--black);
    font-weight: bold;
    padding: 15px;
    width: 100%;
    text-align: center;
    font-family: inherit;
    font-size: 32px;
`;
const StyledInput = styled.input`
  width: 100%;
  border: 2px solid ${props => props.theme.main};
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  font-family: inherit;

  &:focus {
    outline-color: var(--green-light);
  }
`;
const StyledErrorMessage = styled.p `
    font-size: 12px;
    font-weight: bold;
    color: var(--error-red);
    padding: 10px 0;
    text-align: center;
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
    cursor: pointer;
`;
const StyledTextContainer = styled.div `
    font-size: 14px;
    margin-top: 30px;
    text-align: center;
    color: var(--green-light-dark);
`;
//Theme for Error Styling 
StyledInput.defaultProps = {
    theme: {
      main: "var(--green-light)"
    }
  }
  const defaultThemeInput = {
    main: "var(--green-light)"
  }
  const errorMessageInput = {
    main: "var(--error-red)"
  }
  