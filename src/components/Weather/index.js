import {
  WeatherCard,
  Temp,
  Description,
  Date,
  SecondContainer,
  SubInfo,
} from './styles'

import {
  FaCloudSun,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaSun,
} from 'react-icons/fa'
import { AiFillCompass } from 'react-icons/ai'
import { ImRocket } from 'react-icons/im'
import { IoMdSpeedometer } from 'react-icons/io'
import { WiWindDeg } from 'react-icons/wi'

export const Weather = ({
  cityName,
  weather_Time,
  temperature = 20,
  weather_Description,
  wind_Speed,
  wind_Degree,
  wind_Direction,
  presure,
}) => {
  return (
    <WeatherCard>
      <div>
        <Date>{weather_Time}</Date>
        <h2>{cityName}</h2>
        <Temp>
          {temperature < 5 ? (
            <FaCloudShowersHeavy />
          ) : temperature < 12 ? (
            <FaCloudSunRain />
          ) : temperature < 25 ? (
            <FaCloudSun />
          ) : (
            <FaSun />
          )}
          {temperature} °C
        </Temp>
      </div>
      <Description>{weather_Description}</Description>
      <SecondContainer>
        <SubInfo>
          <AiFillCompass /> {wind_Direction}
        </SubInfo>
        <SubInfo>
          <ImRocket /> {presure}hPa
        </SubInfo>
        <SubInfo>
          <IoMdSpeedometer /> {wind_Speed} Km/h
        </SubInfo>
        <SubInfo>
          <WiWindDeg /> {wind_Degree}°
        </SubInfo>
      </SecondContainer>
    </WeatherCard>
  )
}
