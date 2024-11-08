import Image from "next/image";
import styled from "styled-components";
import { LuDroplet } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import MultifunctionalButton from "../MultifunctionalButton";

export default function PlantDetails({ plant, onDeletePlant, id }) {
  return (
    <>
      <h2>{plant.name}</h2>
      <h3>{plant.botanicalName}</h3>
      <StyledPlantContainer>
        <StyledPlantNeedsContainer>
          <h4>Light needs:</h4>
          <span>
            {plant.lightNeed === "Full Shade" ? (
              <>
                <StyledSunIconFull />
                <StyledSunIcon />
                <StyledSunIcon />
              </>
            ) : plant.lightNeed === "Partial Shade" ? (
              <>
                <StyledSunIconFull />
                <StyledSunIconFull />
                <StyledSunIcon />
              </>
            ) : plant.lightNeed === "Full Sun" ? (
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
            {plant.waterNeed === "Low" ? (
              <>
                <StyledWaterIconFull />
                <StyledWaterIcon />
                <StyledWaterIcon />
              </>
            ) : plant.waterNeed === "Medium" ? (
              <>
                <StyledWaterIconFull />
                <StyledWaterIconFull />
                <StyledWaterIcon />
              </>
            ) : plant.waterNeed === "High" ? (
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
            {plant.fertiliserSeason.map((season) => (
              <li key={season}>{season} </li>
            ))}
          </ul>
          <br />
        </StyledPlantNeedsContainer>
        <StyledImageContainer>
          <StyledImage src={plant.imageUrl} alt={plant.name} fill />
        </StyledImageContainer>
      </StyledPlantContainer>
      <h4>Description:</h4>
      <p>{plant.description}</p>
      <br />
      <MultifunctionalButton buttonText={"Edit"} plant={plant} />
      <MultifunctionalButton
        onDeletePlant={onDeletePlant}
        plant={plant}
        id={id}
        buttonText={"Delete"}
      />
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
