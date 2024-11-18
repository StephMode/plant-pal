import { useRouter } from "next/router";
import TipDetails from "/components/TipDetails/";

export default function TipDetailsPage({ tips }) {
  const router = useRouter();

  const { id } = router.query;

  const tip = tips.find((tip) => tip.id === id);

  if (!tip) {
    return <p>Plant tip not found!</p>;
  }

  return (
    <main>
      <h1>Care tips</h1>
      <TipDetails tip={tip} />
    </main>
  );
}
