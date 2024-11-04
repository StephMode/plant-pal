import Image from "next/image";

export default function PlantOwnedButton({
  isOwned,
  handleToggleOwned,
  plantId,
}) {
  return (
    <button type="button" onClick={() => handleToggleOwned(plantId)}>
      {isOwned === true ? (
        <Image
          src={"./heart-solid.svg"}
          height={40}
          width={40}
          alt="heart icon"
        />
      ) : (
        <Image src={"./heart.svg"} height={40} width={40} alt="heart icon" />
      )}
    </button>
  );
}
