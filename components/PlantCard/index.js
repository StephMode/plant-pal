import Image from "next/image"

export default function PlantCard({ image, name, botanicalName }) {

    return (
        <section>
            <Image
                src={image}
                width={200}
                height={200}
                alt={name} 
            />
            <h2>{name}</h2>
            <h3>{botanicalName}</h3>
        </section>
    )
}