import { Container, Content } from './styles'

import logo from '../../assets/logo.svg'

interface HeaderProps {
  setModalIsOpen: () => void
}

function Header ({ setModalIsOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo}></img>
        <button type="button" onClick={setModalIsOpen}>Nova transação</button>
      </Content>
    </Container>
  )
}

export { Header }
