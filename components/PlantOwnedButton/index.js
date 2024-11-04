import Image from "next/image";

export default function PlantOwnedButton({ isOwned, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {isOwned ? (
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
