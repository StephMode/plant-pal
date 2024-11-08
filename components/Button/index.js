import styled from "styled-components"

export default function Button({ buttonText, buttonFunction }) {

    return (
        <StyledButton type="button" onClick={buttonFunction}>
            {buttonText}
        </StyledButton>
    )
}


const StyledButton = styled.button`
  background-color: var(--brown);
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
`;

