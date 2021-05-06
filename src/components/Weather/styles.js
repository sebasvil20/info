import styled from 'styled-components'

export const WeatherCard = styled.div`
  width: 100%;
  background-color: white;
  max-height: 200px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin-bottom: 30px;

  @media (max-width: 1348px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Date = styled.h3`
  color: #5f30c5;
  font-weight: 500;
  font-size: 14px;
`

export const Temp = styled.h1`
  color: #281452;
  font-weight: 800;
  font-size: 38px;
  margin: 10px 0 20px;
`

export const Description = styled.p`
  font-size: 18px;
`

export const SecondContainer = styled.div`
  height: 50px;
  width: 250px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1348px) {
    text-align: center;
  }
`

export const SubInfo = styled.p`
  min-width: 120px;
`
