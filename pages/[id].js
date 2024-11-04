import { useRouter } from "next/router";
import plants from "@/lib/data";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";

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
        <p>{plant.lightNeed}</p>
        <p>{plant.waterNeed}</p>
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
