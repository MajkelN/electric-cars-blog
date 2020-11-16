import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    padding: 80px 100px 0 100px;
`

export const Form = styled.form`
    width: 60%;
 
    @media (max-width: 960px) {
        width: 100%;
    }

    p {
        margin: 20px 0;
        font-weight: bold;
        font-size: 2rem;
        text-transform: uppercase;
    }

    input[type=text] {
        width: 50%;
        height: 40px;
        border: none;
        outline: none;
        font-size: 1.6rem;
        padding: 10px 0 10px 20px;
        border-radius: 6px;
        background: #ffffff;
        box-shadow: inset 5px 5px 10px #d9d9d9, 
                    inset -5px -5px 10px #ffffff;
    }

    textarea {
        resize: none;
        width: 100%;
        height: 450px;
        border: none;
        outline: none;
        font-size: 1.6rem;
        padding: 20px 0 20px 20px;
        border-radius: 6px;
        background: #ffffff;
        box-shadow: inset 5px 5px 10px #d9d9d9, 
                    inset -5px -5px 10px #ffffff;
    }


`

export const InputBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
    width: 140px;
    margin-top: 20px;
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