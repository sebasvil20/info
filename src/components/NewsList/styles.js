import styled from 'styled-components'

export const NewsContainer = styled.div`
    background-color: white;
    width: 75%;
    border-radius: 5px;
    padding: 20px;
    min-width: 900px;

    @media (max-width: 1250px){
        width: 100%;
    }

    
    @media (max-width: 1100px){
        width: 100%;
        min-width: 300px;
    }
`