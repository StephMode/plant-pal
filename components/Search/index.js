import styled from "styled-components"
import { useEffect } from "react";


export default function Search({ handleSearchQuery, resetSearch, searchFor }) {

    function handleSearchInput(event) {
        const searchInput = event.target.value.toLowerCase();
        if (searchInput.length < 3) {
            resetSearch()
            return
        } else {
            handleSearchQuery(searchInput, searchFor)
        }
    }

    useEffect(() => {
        resetSearch();
    }, [searchFor])

    return(
            <StyledSearchBar>
                <StyledSearchInput 
                type="text"
                name="searchQuery"
                placeholder={`Search for ${searchFor}`}
                onChange={handleSearchInput}
                />
            </StyledSearchBar>
    )
}


const StyledSearchBar = styled.div`
    width: 100%;
    padding: 0 10px;
    margin-bottom: 20px;
`;

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  font-family: inherit;
  width: 100%;

  background: url("./magnifying-glass-solid.svg") no-repeat 97.5%;
  background-size: 20px;

  background-color: rgba(0,0,0,0.1);
  border: 2px solid rgba(0,0,0,0.1);

  &:focus {
    outline-color: var(--green-light);
  }
`;