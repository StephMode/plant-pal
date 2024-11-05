import PlantCard from "/components/PlantCard";
import Link from "next/link";

export default function HomePage({ handleToggleOwned, plants }) {
  return (
    <main>
      <h1>Plant List</h1>
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
      <Link href={"/myplants"}>My Plants</Link>
    </main>
  );
}
