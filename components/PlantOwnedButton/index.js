import styled from "styled-components";
import { IoHeart } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

export default function PlantOwnedButton({ isOwned, onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {isOwned ? <IoHeart /> : <IoHeartOutline />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background: transparent;
  border-radius: 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  z-index: 20;
  font-size: 3rem;
  color: var(--gold);
`;
