import { HistoryContainer, Ul, Li } from './styles'

export const HistoryCard = ({ history, setCityToSearch, handleQuery }) => {
  const handleClick = async (cityName) => {
    await setCityToSearch(cityName)
    handleQuery(cityName)
  }

  return (
    <HistoryContainer>
      <h3>Last searchs</h3>
      <Ul>
        <Li onClick={() => handleClick(history[0].city.city_Name)}>
          {history[0].city.city_Name}
        </Li>
        <Li onClick={() => handleClick(history[1].city.city_Name)}>
          {history[1].city.city_Name}
        </Li>
        <Li onClick={() => handleClick(history[2].city.city_Name)}>
          {history[2].city.city_Name}
        </Li>
      </Ul>
    </HistoryContainer>
  )
}
