import {NewsContainer, Image, TextContainer, Author, Anchor, Date} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs';

export const NewsCard = ({author, title, url, urlToImage, description, publishedAt}) => {
    return(
        <NewsContainer>
            <Image src={urlToImage} alt={title}/>
            <TextContainer>           
                <div>
                    <h1>{title}</h1>
                    <Author>{author}</Author>
                    <Date>{publishedAt}</Date>
                </div>
                <p>{description}</p>
                <Anchor href={url} target="_blank" rel="noopener noreferrer">Seguir leyendo <BsBoxArrowUpRight /> </Anchor>                   
            </TextContainer>
        </NewsContainer>
    )
}