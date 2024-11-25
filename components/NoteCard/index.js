import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

export default function NoteCard({ headline, note, handleDeleteNote, id }) {
  return (
    <StyledNoteWrapper>
      <StyledFieldset>
        <StyledInput
          id="Title"
          name="Title"
          type="text"
          placeholder
          defaultValue={headline}
          readonly
        ></StyledInput>
      </StyledFieldset>
      <StyledFieldset>
        <StyledInput
          id="note"
          name="note"
          type="text"
          placeholder
          defaultValue={note}
          readonly
        ></StyledInput>
      </StyledFieldset>
      <StyledButton type="button" onClick={() => handleDeleteNote(noteid)}>
        <FaTrashAlt />
      </StyledButton>
      <StyledButton type="button" onClick={""}>
        <FaPen />
      </StyledButton>
    </StyledNoteWrapper>
  );
}

const StyledInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  font-family: inherit;
`;
const StyledFieldset = styled.fieldset`
  flex-direction: column;
  display: flex;
  border: none;
  padding: 2px 0;
  color: var(--green-main);
  text-align: left;
`;

const StyledButton = styled.button`
  background-color: var(--gray);
  padding: 8px 20px 1px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  align-self: end;
  font-size: 20px;
  transition: 0.5s ease-in-out;
`;
const StyledNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
