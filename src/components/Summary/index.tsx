import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import { Container } from './styles'

function Summary () {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income}></img>
        </header>
        <strong>R$17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome}></img>
        </header>
        <strong>- R$1259,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={total}></img>
        </header>
        <strong>R$16.141,00</strong>
      </div>
    </Container>
  )
}

export { Summary }
