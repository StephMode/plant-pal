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
    padding: 8px 20px 1px 20px;
    margin: 61px 10px 10px 0px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    align-self: end;
    font-size: 26px;
`;

