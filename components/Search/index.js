import styled from "styled-components"
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";


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
        <>
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