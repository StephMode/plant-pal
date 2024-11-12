import styled from "styled-components";

export default function Button({ buttonText, handleButtonFunction }) {

    return (
        <StyledButton type="button" onClick={handleButtonFunction}>
            {buttonText}
        </StyledButton>
    )
}


const StyledButton = styled.button`
  background-color: var(--brown);
  padding: 8px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

