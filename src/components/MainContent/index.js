import {MainContainer, SideBar} from './styles'
import { NewsList } from "../NewsList";
import { Weather } from '../Weather';
import { HistoryCard } from '../HistoryCard';

export const MainContent = () => (
    <MainContainer>
        <NewsList />
        <SideBar>
            <Weather />
            <HistoryCard />
        </SideBar>
    </MainContainer>
)