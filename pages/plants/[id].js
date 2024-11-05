import { useRouter } from "next/router";
import plants from "@/lib/data";
import PlantDetails from "@/components/PlantDetails/PlantDetails";

export default function PlantDetailsPage() {
  const router = useRouter();

  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <p>Plant not found!</p>;
  }

  return (
    <main>
      <h1>Plant Details</h1>
      <PlantDetails {...plant} />
    </main>
  );
}
