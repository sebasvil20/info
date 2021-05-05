import styled from 'styled-components'

export const HistoryContainer = styled.div`
    width: 100%;
    background-color: white;
    max-height: 200px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    padding: 20px;

    @media (max-width: 1348px){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
    }
`

export const Ul = styled.ul`
    margin-top: 10px;
    padding-left: 20px;
`

export const Li = styled.li`
    cursor: pointer;
    margin-top: 5px;
`