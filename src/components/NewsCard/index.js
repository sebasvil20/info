import {
  NewsContainer,
  Image,
  TextContainer,
  Author,
  Anchor,
  Date,
} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export const NewsCard = ({
  author,
  title,
  url,
  urlToImage = 'https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  description,
  publishedAt,
}) => {
  return (
    <NewsContainer>
      <Image src={urlToImage} alt={title} />
      <TextContainer>
        <div>
          <h1>{title}</h1>
          <Author>{author}</Author>
          <Date>{publishedAt}</Date>
        </div>
        <p>{description}</p>
        <Anchor href={url} target='_blank' rel='noopener noreferrer'>
          Seguir leyendo <BsBoxArrowUpRight />
        </Anchor>
      </TextContainer>
    </NewsContainer>
  )
}
