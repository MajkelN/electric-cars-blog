import styled from 'styled-components'

export const LinkStyle = styled.span`
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: white;
    background-color: ${({theme}) => theme.colors.normalBlue};
    padding: 10px 30px;
    border-radius: 6px;
    color: white;
    transition: .3s linear;

    :hover {
        background-color: ${({theme}) => theme.colors.darkBlue};
    }
`