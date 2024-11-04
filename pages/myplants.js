import PlantCard from "@/components/PlantCard";

export default function MyPlants({ handleToggleOwned, plants }) {
  return (
    <>
      <main>
        <h1>My Plants</h1>
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
      </main>
    </>
  );
}
