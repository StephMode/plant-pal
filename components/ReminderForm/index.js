import Button from "../Button";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function ReminderForm({plantName, handleToggleModal}) {
    return (
        <StyledSection>
            <form>
                <StyledCloseButton type="button" onClick={() => handleToggleModal("Reminder")}>
                <IoClose />
                </StyledCloseButton>
                <h2>Create Reminder for {plantName}</h2>
                <label htmlFor="task">
                    <input type="text" id="task" name="task" placeholder="e.g. watering"></input> 
                </label>
                <label htmlFor="date">
                    <input type="date" id="date" name="date"></input> 
                </label>
                <button type="submit">Create Reminder</button>
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