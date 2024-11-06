import PlantCard from "/components/PlantCard";
import styled from "styled-components";
import Link from "next/link";

export default function MyPlants({ handleToggleOwned, plants }) {
  const ownedPlants = plants.filter((plant) => plant.isOwned);

  return (
    <main>
      <h1>My Plants</h1>
      {ownedPlants.length === 0 && (
        <StyledInfoText>Currently no plants in your list!</StyledInfoText>
      )}
      <ul>
        {ownedPlants.map((plant) => (
          <li key={plant.id}>
            <PlantCard
              plantId={plant.id}
              image={plant.imageUrl}
              name={plant.name}
              botanicalName={plant.botanicalName}
              handleToggleOwned={handleToggleOwned}
              isOwned={plant.isOwned}
            />
          </li>
        ))}
      </ul>
      <Link href="/">Plant List</Link>
    </main>
  );
}

const StyledInfoText = styled.p`
  color: var(--green-main);
  background-color: var(--gray);
  margin-top: 10px;
  padding: 40px 40px;
  border-radius: 25px;
`;
