import {MainContainer, SideBar} from './styles'
import { NewsList } from "../NewsList";
import { Weather } from '../Weather';
import { HistoryCard } from '../HistoryCard';

export const MainContent = ({city, history, setCityToSearch, handleQuery}) => (
    <MainContainer>
        <NewsList 
            news = {city.data.news}
        />
        <SideBar>
            <Weather 
                cityName = {city.data.city_Name}
                {...city.data.weather}
            />
            <HistoryCard 
                history = {history}
                setCityToSearch = {setCityToSearch}
                handleQuery = {handleQuery}
            />
        </SideBar>
    </MainContainer>
)