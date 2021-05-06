import { NewsCard } from "../NewsCard"

import {NewsContainer} from './styles'

export const NewsList = ({news}) => {
    return(
        <NewsContainer>
            {
                news.map(singleNew => (
                    <NewsCard 
                        key={singleNew.id}
                        {...singleNew}
                    />
                ))
            }
        </NewsContainer>
    )
}