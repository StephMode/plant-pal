import { useRouter } from "next/router";
import TipDetails from "/components/TipDetails/";

export default function TipDetailsPage({
  tips,
  plants,
  handleDeleteNote,
  notesData,
}) {
  const router = useRouter();

  const { id } = router.query;

  const tip = tips.find((tip) => tip.id === id);

  const plantsToBeTagged = plants;

  if (!tip) {
    return <p>Plant tip not found!</p>;
  }

  if (!router.isReady) {
    return null;
  }

  return (
    <main>
      <h1>Care tips</h1>
      <TipDetails
        tip={tip}
        plantsToBeTagged={plantsToBeTagged}
        handleDeleteNote={handleDeleteNote}
        notesData={notesData}
        routerQuery={id}
      />
    </main>
  );
}
