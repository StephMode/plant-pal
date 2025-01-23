import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import toast from "react-hot-toast";
import { ThemeProvider } from "styled-components";

export default function NoteCard({
  handleDeleteNote,
  id,
  handleEditNote,
  routerQuery,
  dateCreated,
  headline,
  note,
}) {
  const [toggleEditNote, setToggleEditNote] = useState(false);

  function EditNote(event) {
    if (!toggleEditNote) {
      setToggleEditNote(true);
      event.preventDefault();
    } else {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      handleEditNote(data, id);
      setToggleEditNote(false);
      toast.success("Note successfully edited");
    }
  }

  function autoResize(event) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <ThemeProvider theme={toggleEditNote ? EditMode : ViewMode}>
      <StyledNoteWrapperForm onSubmit={EditNote}>
        <StyledTitleAndButtonWrapper>
          <StyledInputTitle
            id="title"
            name="title"
            readOnly={!toggleEditNote}
            onInput={(e) => autoResize(e)}
            defaultValue={headline}
            maxLength={22}
          ></StyledInputTitle>

          <StyledButtonWrapper>
            <StyledButton type="button" onClick={() => handleDeleteNote(id)}>
              <FaTrashAlt />
            </StyledButton>
            <StyledButton type="submit">
              {toggleEditNote ? <BiSave /> : <FaPen />}
            </StyledButton>
          </StyledButtonWrapper>
        </StyledTitleAndButtonWrapper>

        <StyledTextareaNote
          id="note"
          name="note"
          readOnly={!toggleEditNote}
          onInput={(e) => autoResize(e)}
          defaultValue={note}
        ></StyledTextareaNote>

        <StyledDate>{dateCreated}</StyledDate>
      </StyledNoteWrapperForm>
    </ThemeProvider>
  );
}

const EditMode = {
  background: {
    color: "var(--white)",
  },
  border: {
    color: "2px solid var(--green-light)",
  },
};

const ViewMode = {
  background: {
    color: "var(--green-super-light)",
  },
  border: {
    color: "none",
  },
};

const StyledTextareaNote = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  margin-top: 6px;
  width: 100%;
  font-size: 15px;
  border: ${(props) => props.theme.border.color};
  background-color: ${(props) => props.theme.background.color};
  resize: none;
  overflow: visible;
  outline: none;
  height: auto;
  font-family: inherit;
  color: var(--black);
`;

const StyledInputTitle = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin-top: 6px;
  width: 100%;
  font-size: 15px;
  border: ${(props) => props.theme.border.color};
  background-color: ${(props) => props.theme.background.color};
  resize: none;
  overflow: hidden;
  outline: none;
  font-weight: bold;
  height: auto;
  font-family: inherit;
  color: var(--black);
`;

const StyledButton = styled.button`
  padding: 5px 7px;
  border: none;
  cursor: pointer;
  align-self: end;
  font-size: 17px;
  transition: 0.5s ease-in-out;
  background-color: transparent;
  color: var(--black);
`;
const StyledNoteWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  transition: all 0.45s ease;
  border-radius: 20px;
  height: auto;
  width: 100%;
  background-color: var(--green-super-light);
`;
const StyledTitleAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
`;

const StyledDate = styled.p`
  align-self: end;
  margin-top: 10px;
  color: var(--green-main);
  font-size: 13px;
  margin-right: 5px;
`;
