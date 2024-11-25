import Link from "next/link";
import styled from "styled-components"

export default function Breadcrumbs({breadcrumbType, plant,tip, isOwned}){
    return(
        <StyledBreadcrumbContainer>
            <div>
                <StyledLink href="/home">Home</StyledLink>
                { breadcrumbType === "plant" && 
                <>
                    {isOwned && <>&gt; <StyledLink href="/plantTipsPage">My plants</StyledLink></>} &gt; <i><b> {plant.name} </b></i>
                </>
                }
                { breadcrumbType === "tip" && 
                <>
                    &gt; <StyledLink href="/plantTipsPage">Care Tips</StyledLink> &gt; <i><b> {tip.title} </b></i>
                </>
                }
            </div>
        </StyledBreadcrumbContainer>
    )
}

const StyledBreadcrumbContainer = styled.section`
    font-size: 12px;
    color: var(--green-main);
    margin: -10px 0 20px  -5px;
`;
const StyledLink = styled(Link)`
    text-decoration: underline;
    padding: 5px;
    &:hover {
        background-color: var(--gray);
        border-radius: 5px;
    }
`;