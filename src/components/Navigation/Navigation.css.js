import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    font-family: 'Roboto', sans-serif;
    widht: 100vh;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 15px;
`

export const NavWrapper = styled.nav`
    width: 50%;
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
    font-size: 1.5rem;

    a {
        text-decoration: none;
    }
`


