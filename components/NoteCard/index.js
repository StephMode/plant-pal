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
  tipTitle,
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
      handleEditNote(data, id, routerQuery);
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
          <TipTitle>Note on {tipTitle}</TipTitle>
          <StyledButtonWrapper>
            <StyledButton type="button" onClick={() => handleDeleteNote(id)}>
              <FaTrashAlt />
            </StyledButton>
            <StyledButton type="submit">
              {toggleEditNote ? <BiSave /> : <FaPen />}
            </StyledButton>
          </StyledButtonWrapper>
        </StyledTitleAndButtonWrapper>
        <StyledFieldset>
          <StyledTextareaTitle
            id="Title"
            name="Title"
            placeholder="Enter headline"
            readOnly={!toggleEditNote}
            onInput={(e) => autoResize(e)}
          ></StyledTextareaTitle>
        </StyledFieldset>
        <StyledFieldset>
          <StyledTextareaNote
            id="note"
            name="note"
            placeholder="Enter note"
            readOnly={!toggleEditNote}
            onInput={(e) => autoResize(e)}
          ></StyledTextareaNote>
        </StyledFieldset>
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
    boxShadow: "0 0 2px rgba(0, 112, 243, 0.5)",
  },
};

const ViewMode = {
  background: {
    color: "var(--white)",
  },
  border: {
    color: "none",
    boxShadow: "none",
  },
};

const StyledTextareaNote = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  margin-top: 6px;
  width: 100%;
  font-size: 15px;
  border: ${(props) => props.theme.border.color};
  box-shadow: ${(props) => props.theme.border.boxShadow};
  background-color: ${(props) => props.theme.background.color};
  resize: none;
  overflow: hidden;
  outline: none;
`;

const StyledTextareaTitle = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  margin-top: 6px;
  width: 100%;
  font-size: 15px;
  border: ${(props) => props.theme.border.color};
  box-shadow: ${(props) => props.theme.border.boxShadow};
  background-color: ${(props) => props.theme.background.color};
  resize: none;
  overflow: hidden;
  outline: none;
  font-weight: bold;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  padding: 2px 0;
  text-align: left;
`;

const StyledButton = styled.button`
  padding: 5px 7px;
  border: none;
  cursor: pointer;
  align-self: end;
  font-size: 17px;
  transition: 0.5s ease-in-out;
  background-color: #fbfbfb;
`;
const StyledNoteWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.45s ease;
  border-radius: 20px;
  height: auto;
  width: 320px;
  margin: 15px 0px;
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

const TipTitle = styled.p`
  background-color: var(--gold);
  padding: 5px 7px;
  border-radius: 10px;
`;
const StyledDate = styled.p`
  align-self: end;
  margin-top: 10px;
  color: #cccccc;
  font-size: 13px;
  margin-right: 5px;
`;
