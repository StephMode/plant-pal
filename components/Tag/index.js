import Link from "next/link";
import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";

export default function Tag({tagId, headline, subHeadline, image, tagType }) {
  
    return (
      <Link href={`/${tagType}/${tagId}`}>
        <ThemeProvider theme={tagType === "plants" ? plantTagtheme : tipTagtheme}>
        <StyledTag>
       
       <StyledImage src={image} width={55} height={55} alt={`"image of ${headline}"`}/>
        <div>
          <h4>{headline}</h4>
          <StyledH5>{subHeadline}</StyledH5>
        </div>
        </StyledTag>
        </ThemeProvider>
      </Link>
  )
}



const StyledTag = styled.article`
  min-width: 200px;
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 40px;
  background-color: ${props => props.theme.main};
  padding: 10px 25px 10px 10px;
  transition: all ease-in-out 0.5s;
  color: var(--black);

  &:hover{
    background-color: ${props => props.theme.hover};
    color: var(--white)
  }
`;
StyledTag.defaultProps = {
  theme: {
    main: "var(--green-light)",
    hover: "var(--green-main)"
  }
}
const tipTagtheme = {
  main: "var(--brown)",
  hover: "var(--brown-dark)"
}
const plantTagtheme = {
  main: "var(--green-light)",
  hover: "var(--green-main)"
}

const StyledImage = styled(Image)`
  border-radius: 50px;
  min-width: 55px;
  min-height: 55px;
`;

const StyledH5 = styled.h5`
  font-weight: normal;
`;
