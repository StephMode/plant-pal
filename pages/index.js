import PlantCard from "@/components/PlantCard";
import plants from "@/lib/data";

export default function HomePage({ handleToggleOwned }) {
  return (
    <>
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
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
