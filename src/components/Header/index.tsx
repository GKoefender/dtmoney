import { Container, Content } from './styles'

import logo from '../../assets/logo.svg'

function Header () {
  return (
    <Container>
      <Content>
        <img src={logo}></img>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}

export { Header }
