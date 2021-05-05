import {WeatherCard, Temp, Description, Date, SecondContainer, SubInfo} from './styles'

import { FaCloudSun, FaCloudShowersHeavy, FaCloudSunRain, FaSun } from 'react-icons/fa';
import { AiFillCompass } from 'react-icons/ai';
import { ImRocket } from 'react-icons/im';
import { IoMdSpeedometer } from 'react-icons/io';
import { WiWindDeg } from 'react-icons/wi';



export const Weather = ({weather_Time, temperature = 25, weather_Description, wind_Speed, wind_Degree, wind_Direction, presure}) => {
    return(
        <WeatherCard>
            <div>
                <Date>4:57pm</Date>
                <h2>Medellín</h2>
                <Temp>
                    {
                        temperature < 5 ? <FaCloudShowersHeavy /> : temperature < 12 ? <FaCloudSunRain /> : temperature < 25 ? <FaCloudSun /> : <FaSun />
                    } {temperature} °C
                </Temp>
            </div>
            <Description>Light breeze</Description>
            <SecondContainer>
                <SubInfo> <AiFillCompass /> NW</SubInfo>
                <SubInfo> <ImRocket /> 1025hPa</SubInfo>
                <SubInfo> <IoMdSpeedometer /> 3.15Km/h</SubInfo>
                <SubInfo> <WiWindDeg /> 360°</SubInfo>
            </SecondContainer>
        </WeatherCard>
    )
}