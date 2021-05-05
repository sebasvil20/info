
import styled from 'styled-components'

export const NewsContainer = styled.div`
    width: 100%;
    min-height: 300px;
    height: 300px;
    max-height: 400px;
    display: flex;
    margin: 20px 0;

    
    @media (max-width: 920px){
        width: 100%;
        max-height: 500px;
        height: 500px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    
    @media (max-width: 620px){
        max-height: 550px;
        height: 550px;
    }

    @media (max-width: 500px){
        max-height: 600px;
        height: 600px;
    }

    
    @media (max-width: 410px){
        max-height: 650px;
        height: 650px;
    }
`

export const Image = styled.img`
    width: 35%;
    min-width: 240px;
    height: 100%;
    min-height: 180px;
    margin-right: 20px;
    
    @media (max-width: 920px){
        width: 50%;
        max-height: 180px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
`

export const Author = styled.h3`
    font-size: 14px;
    color: #858585;
    margin-top: 10px;
    @media (max-width: 920px){
        margin-bottom: 5px;
    }
`

export const Date = styled.h4`
    font-size: 10px;
    color: #ADADAD;
    font-weight: 600;
    margin-top: 5px;
    @media (max-width: 920px){
        margin-bottom: 15px;
    }
`

export const Anchor = styled.a`
    text-decoration: none;
    color: #3F2083;

    &:hover{
        color: #5F30C5;
    }

    
    @media (max-width: 920px){
        margin-top: 15px;
    }
`