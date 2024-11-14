import styled from "styled-components";

export default function EditDeleteButton({ buttonText, handleButtonFunction,

}) {

  return (
    <>
      <StyledButton type="button" onClick={handleButtonFunction}>
        {buttonText}
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--brown);
  padding: 10px 20px 8px 20px;
  border: none;
  border-radius: 20px;
  max-height: 40px;
  font-size: 18px;
  transition: 0.5s ease-in-out ;

  &:hover {
    background-color: var(--brown-dark);
  }
`;
