import { useRouter } from "next/router";
import plants from "@/lib/data";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";
import { LuDroplet } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

export default function PlantDetailsPage() {
  const router = useRouter();

  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <p>Plant not found!</p>;
  }

  return (
    <>
      <main>
        <h1>Plant Details</h1>
        <h2>{plant.name}</h2>
        <h3>{plant.botanicalName}</h3>
        <Image src={plant.imageUrl} alt={plant.name} width={300} height={300} />
        <p>
          Light needs
          <StyledSunIcon />
          <StyledSunIcon
            style={plant.lightNeed === "Full Shade" ? { fill: "none" } : null}
          />
          <StyledSunIcon
            style={
              plant.lightNeed === "Full Shade" ||
              plant.lightNeed === "Partial Shade"
                ? { fill: "none" }
                : null
            }
          />
        </p>

        <p>
          Water needs
          <StyledWaterDropIcon />
          <StyledWaterDropIcon
            style={plant.waterNeed === "Low" ? { fill: "none" } : null}
          />
          <StyledWaterDropIcon
            style={
              plant.waterNeed === "Low" || plant.waterNeed === "Medium"
                ? { fill: "none" }
                : null
            }
          />
        </p>

        <ul>
          {plant.fertiliserSeason.map((season) => (
            <li key={season}>{season}</li>
          ))}
        </ul>
        <p>{plant.description}</p>
        <button onClick={() => router.push("/")}>
          <IoArrowBackOutline />
        </button>
      </main>
    </>
  );
}

const StyledWaterDropIcon = styled(LuDroplet)`
  color: blue;
  fill: blue;
`;

const StyledSunIcon = styled(FiSun)`
  color: gold;
  fill: gold;
`;
