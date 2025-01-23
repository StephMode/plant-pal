import Search from "@/components/Search";
import TipCard from "/components/TipCard";
import styled from "styled-components";

export default function PlantTipsPage({ tips, handleSearchQuery, searchResults, resetSearch, noSearchResults }) {
  const tipsTobeRendered = noSearchResults || searchResults.length > 0 ? searchResults : tips;

  return (
    <main>
      <h1>Care tips</h1>

      
      <StyledSpacer/>

      <Search 
        handleSearchQuery={handleSearchQuery}
        resetSearch={resetSearch}
        searchFor={"tips"}
      />

      {tips.length === 0 && (<StyledInfoText>Currently no tips available!</StyledInfoText>)}
      {noSearchResults && (<StyledInfoText>No tips match the search. Please try again.</StyledInfoText>)}
      
      <ul>
        {tipsTobeRendered.map((tip) => (
          <li key={tip._id}>
            <TipCard
              tipId={tip._id}
              image={tip.imageURL}
              title={tip.title}
              shortBodyContent={tip.shortBodyContent}
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
  height: 70px;
`;
