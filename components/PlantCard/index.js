import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function PlantCard({ image, name, botanicalName, id }) {
  return (
    <article>
      <StyledImageContainer>
        <StyledImage src={image} alt={name} fill={true} />
      </StyledImageContainer>
      <Link href={`/plants/${id}`}>
        <h2>{name}</h2>
        <h3>{botanicalName}</h3>
      </Link>
    </article>
  );
}

const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledImage = styled(Image)`
  text-align: center;
  object-fit: cover;
`;
