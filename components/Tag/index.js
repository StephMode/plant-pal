import Link from "next/link";
import Image from "next/image";

export default function Tag({id, headline, subHeadline, image, tagType }) {
    // wir können die compo so bauen: prop hashtagType gibt vor, welche Art von hashtag und dementsprechend conditional render
    // TipDetails und PlantDetails geben dann jweils die detail props für den Einzelhashtag runter
  
    return (
      <article>
       <Link href={`/${tagType}/${id}`}>
       <Image src={image} width={50} height={50} alt={`"image of ${headline}"`}/>
        <h4>{headline}</h4>
        <h5>{subHeadline}</h5>
       </Link>
      </article>
  )
}

 