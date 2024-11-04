import Image from "next/image";

export default function PlantOwnedButton({}) {
  return (
    <button type="button">
      <Image src={"./heart.svg"} height={40} width={40} alt="heart icon" />
    </button>
  );
}
