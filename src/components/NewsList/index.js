import { NewsCard } from "../NewsCard"

import {NewsContainer} from './styles'

export const NewsList = () => {
    return(
        <NewsContainer>
            {
                [0, 1, 2].map(news => (
                    <NewsCard 
                        author="Wilson Wong" 
                        publishedAt="2021-05-05 16:18:36"
                        title="At least four dead after small plane crashes into Mississippi home - NBC News"
                        description="The plane crashed into a home on Annie Christie Drive in Hattiesburg, about 90 miles southwest of Jackson, late Tuesday, authorities said."
                        url="https://www.nbcnews.com/news/us-news/least-four-dead-after-small-plane-crashes-mississippi-home-n1266356"
                        urlToImage="https://media4.s-nbcnews.com/j/newscms/2021_18/3470420/210505-hattiesburg-crash-mb-1659_60e76ebef43846e8d41bf4441b55fdcc.nbcnews-fp-1200-630.png"
                    />
                ))
            }
        </NewsContainer>
    )
}