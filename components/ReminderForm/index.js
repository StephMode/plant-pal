import styled, {ThemeProvider}  from "styled-components";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ReminderForm({plantName, handleToggleModal}) {

    const [showErrorMessageTask, setShowErrorMessageTask] = useState(false);

    return (
        <StyledSection>
            <form>
                <StyledCloseButton type="button" onClick={() => handleToggleModal("Reminder")}>
                    <IoClose />
                </StyledCloseButton>
                <StyledFieldset>
                    <label htmlFor="task">Task:</label>
                    <ThemeProvider theme={showErrorMessageTask ? errorMessagetheme : defaultTheme}>
                        <StyledInput
                            id="task"
                            name="task"
                            type="text"
                            placeholder="e.g. Watering"
                            onChange={() => {setShowErrorMessageTask(false)}}           
                        ></StyledInput>
                    </ThemeProvider>
                    <StyledErrorMessage>{showErrorMessageTask && "Please insert a task description."}&nbsp;</StyledErrorMessage>
                </StyledFieldset>
                <StyledFieldset>
                    <label htmlFor="date">Date:</label>
                        <StyledInput
                            id="date"
                            name="date"
                            type="date"
                        ></StyledInput>
                </StyledFieldset>
                <StyledButtonContainer>
                    <StyledSubmitButton type="submit">
                        Create Reminder for {plantName}
                    </StyledSubmitButton>
                </StyledButtonContainer>
            </form>
        </StyledSection>

    );
}


const StyledSection = styled.section`
  padding: 15px;
  border-radius: 25px;
  max-width: 600px;
  min-width: 350px;
`;

const StyledFieldset = styled.fieldset`
  flex-direction: column;
  display: flex;
  border: none;
  padding: 2px 0;
  color: var(--green-main);
  text-align: left;
`;

const StyledCloseButton = styled.button`
  background-color: var(--brown);
  border: none;
  border-radius: 20px;
  padding: 5px 6px 0px 6px;
  font-size: 26px;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: all ease-in-out 0.5s;

  &:hover {
    background-color: var(--brown-dark);
  }
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
StyledInput.defaultProps = {
  theme: {
    main: "rgba(0,0,0,0.1)"
  }
}
const defaultTheme = {
  main: "rgba(0,0,0,0.1)"
}
const errorMessagetheme = {
  main: "var(--error-red)"
}

const StyledErrorMessage = styled.p`
  color: var(--error-red);
  font-size: 0.75rem;
  margin-left: 15px;
  padding-top: 5px;
`;

const StyledSubmitButton = styled.button`
  padding: 10px 15px;
  background-color: var(--brown);
  color: var(--black);
  font-weight: bold;
  border: none;
  border-radius: 20px;
  width: 100%;
  margin-top: 10px;
  transition: all ease-in-out 0.5s;

  &:hover {
    background-color: var(--green-main-dark);
    cursor: pointer;
    color: var(--white);
  }
`;

const StyledButtonContainer = styled.section`
  display: flex;
  gap: 15px;
`;