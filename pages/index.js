import PlantCard from "/components/PlantCard";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage({ handleToggleOwned, plants }) {

  return (
    <main>
      <h1>Plant List</h1>
      { plants.length === 0 ? (
        <>
          <StyledInfoText>No plants there yet. Add new ones!</StyledInfoText>
          <br />
          <button type="button">Add Plant</button>
        </>
      ) : (
      <ul>
        {plants.map((plant) => (
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
      )}
      <Link href="/myplants">My Plants</Link>
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




