import { Container } from './styles'

import { Summary } from '../Summary'
import { TransitionsTable } from '../TransactionsTable'

function Dashboard () {
  return (
    <Container>
      <Summary />
      <TransitionsTable />
    </Container>
  )
}

export { Dashboard }
