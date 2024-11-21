import styled, { ThemeProvider } from "styled-components";

export default function Button({ buttonText, handleButtonFunction, buttonRole }) {

    return (
        <ThemeProvider theme={buttonRole === "deleteButton" ? deleteButtonTheme : mainTheme}>
        <StyledButton type="button" onClick={handleButtonFunction}>
            {buttonText}
        </StyledButton>
        </ThemeProvider>
    )
}


const StyledButton = styled.button`
    background-color: ${props => props.theme.main};
    padding: 8px 20px 1px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    align-self: end;
    font-size: 20px;
    transition: 0.5s ease-in-out;

    &:hover {
    background-color: ${props => props.theme.hover};
  }
`;
StyledButton.defaultProps = {
    theme: {
        main: "var(--brown)",
        hover: "var(--brown-dark)"
    }
}
const deleteButtonTheme = {
    main: "var(--gray)",
    hover: "var(--gray-dark)"
}
const mainTheme = {
    main: "var(--brown)",
    hover: "var(--brown-dark)"
}
