import Image from "next/image";
import styled from "styled-components";

export default function PlantOwnedButton({
  isOwned,
  handleToggleOwned,
  plantId,
}) {
  return (
    <StyledButton type="button" onClick={() => handleToggleOwned(plantId)}>
      {isOwned === true ? (
        <Image
          src={"./heart-solid.svg"}
          height={40}
          width={40}
          alt="heart icon"
        />
      ) : (
        <Image src={"./heart.svg"} height={40} width={40} alt="heart icon" />
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background: var(--green-main);
  border-radius: 100%;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  fill: blue;
`;
