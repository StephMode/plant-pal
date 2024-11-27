import styled from "styled-components"
import { IoSearch } from "react-icons/io5";
import { useEffect } from "react";


export default function Search({ handleSearchQuery, resetSearch, searchFor }) {

    function handleSearchInput(event) {
        if (event.target.value.length < 2 || event.target.value.length === 2) {
            resetSearch(event.target.value.length)
            return
        } else {
            handleSearchQuery(event.target.value, searchFor)
        }
    }

    useEffect(() => {
        resetSearch("");
    }, [])


    return(

            <StyledSearchBar>
                <StyledSearchInput 
                type="text"
                name="searchQuery"
                placeholder="Search for tip"
                onChange={handleSearchInput}
                ></StyledSearchInput>
            {/* hier kann ich auch gleich einen Reset Button "x" einbauen, der die Search reseted */}
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