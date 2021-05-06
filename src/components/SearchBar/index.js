import { SearchBarContainer, InputContainer, Input, Button } from './styles'
import { BsArrowRightShort } from 'react-icons/bs'

export const SearchBar = ({ cityToSearch, setCityToSearch, handleQuery }) => {
  return (
    <SearchBarContainer>
      <InputContainer>
        <Input
          placeholder='Search for cities'
          value={cityToSearch}
          onChange={(e) => setCityToSearch(e.target.value)}
        />
        <Button onClick={() => handleQuery()}>
          <BsArrowRightShort size={24} />
        </Button>
      </InputContainer>
    </SearchBarContainer>
  )
}
