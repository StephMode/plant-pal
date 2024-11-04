import PlantCard from "@/components/PlantCard";
import plants from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <main>
        <h1>Plant List</h1>
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>
              <PlantCard
                image={plant.imageUrl}
                name={plant.name}
                botanicalName={plant.botanicalName}
                id={plant.id}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
