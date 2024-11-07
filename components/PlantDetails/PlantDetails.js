import Image from "next/image";
import styled from "styled-components";
import { LuDroplet } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import PlantDeleteButton from "../Modal";

export default function PlantDetails({
  name,
  botanicalName,
  imageUrl,
  waterNeed,
  lightNeed,
  fertiliserSeason,
  description,
  onDeletePlant,
  id
}) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{botanicalName}</h3>
      <StyledPlantContainer>
        <StyledPlantNeedsContainer>
          <h4>Light needs:</h4>
          <span>
            {lightNeed === "Full Shade" ? (
              <>
                <StyledSunIconFull />
                <StyledSunIcon />
                <StyledSunIcon />
              </>
            ) : lightNeed === "Partial Shade" ? (
              <>
                <StyledSunIconFull />
                <StyledSunIconFull />
                <StyledSunIcon />
              </>
            ) : lightNeed === "Full Sun" ? (
              <>
                <StyledSunIconFull />
                <StyledSunIconFull />
                <StyledSunIconFull />
              </>
            ) : null}
          </span>
          <br />

          <h4>Water needs:</h4>
          <span>
            {waterNeed === "Low" ? (
              <>
                <StyledWaterIconFull />
                <StyledWaterIcon />
                <StyledWaterIcon />
              </>
            ) : waterNeed === "Medium" ? (
              <>
                <StyledWaterIconFull />
                <StyledWaterIconFull />
                <StyledWaterIcon />
              </>
            ) : waterNeed === "High" ? (
              <>
                <StyledWaterIconFull />
                <StyledWaterIconFull />
                <StyledWaterIconFull />
              </>
            ) : null}
          </span>
          <br />
          <h4>Fertiliser Seasons:</h4>
          <ul>
            {fertiliserSeason.map((season) => (
              <li key={season}>{season} </li>
            ))}
          </ul>
          <br />
        </StyledPlantNeedsContainer>
        <StyledImageContainer>
          <StyledImage src={imageUrl} alt={name} fill />
        </StyledImageContainer>
      </StyledPlantContainer>
      <h4>Description:</h4>
      <p>{description}</p>
      <br />
      <PlantDeleteButton onDeletePlant={onDeletePlant} name={name} id={id}  />
      <br />
      <Link href="/">Homepage</Link>
    </>
  );
}

const StyledWaterIconFull = styled(LuDroplet)`
  color: blue;
  fill: blue;
`;

const StyledWaterIcon = styled(LuDroplet)`
  color: blue;
  fill: none;
`;

const StyledSunIconFull = styled(FiSun)`
  color: gold;
  fill: gold;
`;

const StyledSunIcon = styled(FiSun)`
  color: gold;
  fill: none;
`;

const StyledPlantContainer = styled.section`
  display: flex;
  margin: 25px;
`;

const StyledPlantNeedsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
`;

const StyledImage = styled(Image)`
  width: 200%;
  height: auto;
  text-align: center;
  border-radius: 35px;
  object-fit: cover;
`;