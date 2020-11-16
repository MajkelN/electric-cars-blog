import styled from 'styled-components'

export const ArticleWrapper = styled.article`
    background-color: ${({theme}) => theme.colors.lightBlue};
    width: 60%;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 25px 40px;

    @media (max-width: 960px) {
        width: 100%;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.4rem;
    }

    p {
        margin-top: 20px;
        font-size: 1.6rem;
        text-align: justify;
    }

    button {
        position: relative;
        margin-top: 20px;
        border: none;
        outline: none;
        padding: 5px 10px;
        background-color: ${({theme}) => theme.colors.lightPink};
        font-family: "Source Code Pro", monospace;
        font-weight: bold;
        font-size: 1.6rem;
        overflow: hidden;
        
        
        ::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: -100%;
            background-color: ${({theme}) => theme.colors.pink};
            width: 100%;
            height: 3px;
            transition: .3s linear;
        }

        :hover::after {
            left: 0px;
        }
    }
`;

