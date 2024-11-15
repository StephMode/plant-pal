import PlantCard from "/components/PlantCard";
import styled from "styled-components";

export default function PlantTips({ handleToggleOwned, tips }) {

  return (
    <main>
      <h1>Plant Tips</h1>
      <StyledSpacer/>
      {tips.length === 0 && (

        <StyledInfoText>Currently no tips available!</StyledInfoText>
      )}
      
      <ul>
        {tips.map((tip) => (
          <li key={tip.id}>
            <PlantCard
              plantId={tip.id}
              image={tip.imageUrl}
              name={tip.title}
              botanicalName={tip.shortDescription}
              handleToggleOwned={handleToggleOwned}
              isOwned="false"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

const StyledInfoText = styled.p`
  color: var(--green-main);
  background-color: var(--gray);
  margin-top: 10px;
  padding: 40px 40px;
  border-radius: 25px;
`;
const StyledSpacer = styled.span`
  display: block;
  height: 113px;
`;
