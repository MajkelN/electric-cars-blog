import styled from 'styled-components'

export const MainPictureWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    height: 40vw;
    width: 40vw;

    @media (max-width: 960px) {
        height: 55vw;
        width: 55vw;
        top: 70%;
        right: 10%;
    }
`
export const MainPicture = styled.img`
    height: 100%;
    width: 100%;
`