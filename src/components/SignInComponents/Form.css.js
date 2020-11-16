import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormWrapper = styled.div`
    position: relative;
    width: 35%;
    height: 60%;
    box-shadow: -10px 10px 30px -15px ${({theme}) => theme.colors.pink};
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;


    @media (max-width: 960px) {
        width: 45%;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 4rem;
        text-align: center;
        text-transform: uppercase;
        position: sticky;
        top: 50%;
        width: 50%;

        @media (max-width: 960px) {
            position: static;
            font-size: 3rem;
        }
    }

    a {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        color: white;
        background-color: ${({theme}) => theme.colors.lightPink};
        border: none;
        padding: 10px 0;
        border-radius: 8px;
        width: 30%;
        transition: .3s linear;
    
        :hover {
            background-color: ${({theme}) => theme.colors.pink};
        }
        @media (max-width: 960px) {
            width: 45%;
        }
    }
`


export const Form = styled.form`
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 960px) {
        width: 60%;
    }

    input[type=text],
    input[type=password]
    {
        border: none;
        outline: none;
        padding: 0 0 10px 0;
        font-size: 1.6rem;
        border-bottom: 2px solid ${({theme}) => theme.colors.normalBlue};
        transition: .3s linear;

        :focus {
            border-bottom: 2px solid ${({theme}) => theme.colors.darkBlue};
        }
    }
`

export const InputBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.normalBlue};
    border: none;
    padding: 10px 0;
    border-radius: 8px;
    text-align: center;
    color: white;
    outline: none;
    cursor: pointer;
    transition: .3s linear;

    :hover {
        background-color: ${({theme}) => theme.colors.darkBlue};
    }
`