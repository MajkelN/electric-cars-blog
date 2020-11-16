import styled from 'styled-components'

export const H2 = styled.h2`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    letter-spacing: 2.5px;
    font-weight: Ultra-black;
    color: black;
    margin-bottom: 50px;

    ::after {
        content: '';
        background-color: black;
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 180px;
        height: 3px;
    }

    @media (max-width: 956px) {
        font-size: 4.5rem;
    }
`