import styled from 'styled-components'

export const H1 = styled.h1`
    letter-spacing: 1.5px;
    font-size: 2.4rem;
    position: relative;
    text-transform: uppercase;

    ::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -19px;
        background-color: ${({theme}) => theme.colors.pink};
        height: 25px;
        width: 120px;
        z-index: -1
    }
`