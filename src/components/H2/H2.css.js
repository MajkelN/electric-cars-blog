import styled from 'styled-components'

export const H2 = styled.h2`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    letter-spacing: 2.5px;
    font-weight: Ultra-black;
 
    color: ${ ({titleMain}) => titleMain === true ? ({theme}) => theme.colors.normalBlue : 'black' };
    ${ ({titleMain}) => titleMain === true ? null : (`
        margin-bottom: 50px;
        font-size: 4.2rem;

        ::after {
            content: '';
            background-color: black;
            position: absolute;
            bottom: -20px;
            left: 0;
            width: 200px;
            height: 3px;
        }
    `)};

    @media (max-width: 960px) {
        font-size: 4.5rem;

        ${ ({titleMain}) => titleMain === true ? null : (`
            font-size: 3rem;

            ::after {
                width: 140px;
            }
        `)};
    }
`