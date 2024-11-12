import styled from "styled-components";


export default function Modal({ modalContent }) {
  return (


    <StyledModalBackground>
      <StyledModal>
        {modalContent}
      </StyledModal>
    </StyledModalBackground>


  );
}

const StyledModalBackground = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

const StyledModal = styled.section`
    background-color: var(--white);
    border-radius: 35px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
