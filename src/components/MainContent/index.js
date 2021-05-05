import {MainContainer} from './styles'
import { NewsList } from "../NewsList";
import { Weather } from '../Weather';

export const MainContent = () => (
    <MainContainer>
        <NewsList />
        <Weather />
    </MainContainer>
)