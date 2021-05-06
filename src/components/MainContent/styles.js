import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  flex-wrap: wrap;
  @media (max-width: 410px) {
    width: 100%;
  }
`

export const SideBar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1348px) {
    width: 50%;
    order: -1;
  }
`
