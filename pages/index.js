import PlantCard from "@/components/PlantCard";

export default function HomePage({ plants }) {

  console.log(plants);

  return (
    <>
      <main>
        <h1>Plant List</h1>
        <ul>
          { plants.map((plant) => (
            <li key={plant.id}>
              <PlantCard image={plant.imageUrl} name={plant.name} botanicalName={plant.botanicalName}/>
            </li>
          ))
          }
        </ul>
      </main>
    </>
  );
}
