import styled from "styled-components"

export const CardWrapper = styled.div`
  padding: 1rem;
  border: 1px solid lightgrey;
`

export const NavLinkWrapper = styled.div`
  padding: .25rem .5rem;
  border: 1px solid lightgrey;
  border-radius: 8px;

  a {
    text-decoration: none;
  }
`

export const PageTitleStyles = styled.div`
  padding: .5rem;
  color: #2C8D44;
  background-color: #c72a353b;
  text-align: center;
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    -webkit-text-stroke: 1px white; /* width and color */
  }
`