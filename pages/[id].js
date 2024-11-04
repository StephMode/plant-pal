import { useRouter } from "next/router";
import plants from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function PlantDetailsPage() {
  const router = useRouter();

  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <p>Plant not found!</p>;
  }

  return (
    <>
      <StyledImageContainer>
        <StyledImage src={image} alt={name} />
      </StyledImageContainer>
      <h2>{name}</h2>
      <h3>{botanicalName}</h3>
    </>
  );
}
