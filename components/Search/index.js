import styled from "styled-components"
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";


export default function Search({ handleSearchQuery, resetSearch }) {

    function handleSearchInput(event) {
        if (event.target.value.length < 3) {
            resetSearch(event.target.value.length)
        } else {
        handleSearchQuery(event.target.value);
        }
    }

    useEffect(() => {
        resetSearch("");
    }, [])


    return(
        <>
            <p>This is a search bar</p>
            <StyledSearchBar>
                <input 
                type="text"
                name="searchQuery"
                placeholder="Search for tip"
                onChange={handleSearchInput}
                />
            {/* hier kann ich auch gleich einen Reset Button "x" einbauen, der die Search reseted */}
            <IoSearch />
            </StyledSearchBar>
        </>
    )
}


const StyledSearchBar = styled.div`
    display: flex;
    margin: 20px;
`;