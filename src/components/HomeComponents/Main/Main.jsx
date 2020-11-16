import React from 'react';

import {TitleWrapper, MainWrapper} from './Main.css'
import {MainPictureWrapper , MainPicture} from '../MainPicture/MainPicture.css'
import { H2 } from '../../H2/H2.css';

import car from '../../../img/car.svg';

const Main = () => {
    return ( 
        <MainWrapper>
            <TitleWrapper>
                <H2 titleMain>ELECTRIC CARS</H2>
                <p>A step towards the future</p>
            </TitleWrapper>
            <MainPictureWrapper>
                <MainPicture  src={car}/>      
            </MainPictureWrapper>
        </MainWrapper>

     );
}
 
export default Main;