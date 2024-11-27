import styled from "styled-components"
import { IoSearch } from "react-icons/io5";
import { useEffect } from "react";


export default function Search({ handleSearchQuery, resetSearch, searchFor }) {

    function handleSearchInput(event) {
        const searchInput = event.target.value;
        if (searchInput.length <= 2) {
            resetSearch()
            return
        } else {
            handleSearchQuery(searchInput, searchFor)
        }
    }

    useEffect(() => {
        resetSearch();
    }, [])

    return(

            <StyledSearchBar>
                <StyledSearchInput 
                type="text"
                name="searchQuery"
                placeholder={`Search for ${searchFor}`}
                onChange={handleSearchInput}
                />
            <IoSearch />
            </StyledSearchBar>
    )
}


const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    gap: 5px;
`;

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 6px;
  font-family: inherit;

  background-color: rgba(0,0,0,0.1);
  border: 2px solid rgba(0,0,0,0.1);

  &:focus {
    outline-color: var(--green-light);
  }
`;