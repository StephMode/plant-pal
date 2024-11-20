import Link from "next/link";
import Image from "next/image";

export default function Tag({id, headline, subHeadline, image, tagType }) {
    // wir können die compo so bauen: prop hashtagType gibt vor, welche Art von hashtag und dementsprechend conditional render
    // TipDetails und PlantDetails geben dann jweils die detail props für den Einzelhashtag runter
  
    return (
      <article>
       <Link href={`/${tagType}/${id}`}>
        <h3>{headline}</h3>
        <h4>{subHeadline}</h4>
        <Image src={image} width={50} height={50}/>
       </Link>
      </article>
  )
}

 