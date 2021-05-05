import {SearchBarContainer, InputContainer, Input, Button} from './styles'
import { BsArrowRightShort } from "react-icons/bs";

export const SearchBar = () => {
    return(
        <SearchBarContainer>
            <InputContainer>
                <Input placeholder="Search for cities" />
                <Button> <BsArrowRightShort size={24}/> </Button>
            </InputContainer>
        </SearchBarContainer>
    )
}