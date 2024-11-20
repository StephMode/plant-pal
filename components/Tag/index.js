import Link from "next/link";

export default function Tag({id, headline, subheadline }) {
    // wir können die compo so bauen: prop hashtagType gibt vor, welche Art von hashtag und dementsprechend conditional render
    // TipDetails und PlantDetails geben dann jweils die detail props für den Einzelhashtag runter
  
    return (
      <article>
       {/* <Link href={`/plants/${plantID}`}>
          <h3>{name}</h3>
          <h3>{botanicalName}</h3>
        </Link> */}
      </article>
  )
}

 