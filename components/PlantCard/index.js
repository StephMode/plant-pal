import Image from "next/image"
import styled from "styled-components"

export default function PlantCard({ image, name, botanicalName }) {

    return (
        <section>
            <StyledImageContainer>
                <StyledImage
                    src={image}
                    alt={name} 
                />
            </StyledImageContainer>
            <h2>{name}</h2>
            <h3>{botanicalName}</h3>
        </section>
    )
}




const StyledImageContainer = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const StyledImage = styled.img`
    width: 200%;
    height: auto;
    text-align: center;
`;