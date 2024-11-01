import Image from "next/image"

export default function PlantCard() {

    return (
        <section>
            <Image
                src={"https://upload.wikimedia.org/wikipedia/commons/4/45/Sansevieria_trifasciata_Laurentii_pm_4.jpg"}
                width={200}
                height={200}
                alt={"Snake plant"} />
            <h2>Snake plant</h2>
            <h3>Sansevieria trifasciata</h3>
        </section>
    )
}