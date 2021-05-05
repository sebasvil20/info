import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    width: 80%;
    height: 150px;
    background: white;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`

export const InputContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
`

export const Input = styled.input`
    width: 30%;
    padding: 10px;
    color: #474747;
    font-size: 14px;
    outline: none;
    border: 0.5px solid #E0E0E0;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.08);
`

export const Button = styled.button`
    width: 50px;
    background-color: #301863;
    color: white;
    border-radius: 0px 5px 5px 0px;
    border: none;
    transition: all .2s;
    cursor: pointer;

    &:hover{
        background-color: #472494;
        padding-left: 10px;
    }
`