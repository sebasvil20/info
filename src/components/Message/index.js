import { MesgContainer, ErrorMsg } from './styles'

import { BiFace, BiDizzy } from 'react-icons/bi'

export const Message = ({ message }) => (
  <MesgContainer>
    {message.good ? <BiFace size={32} /> : <BiDizzy size={32} />}
    <ErrorMsg>{message.message}</ErrorMsg>
  </MesgContainer>
)
