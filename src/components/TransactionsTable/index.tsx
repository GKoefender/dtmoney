import { Container } from './styles'

function TransitionsTable () {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento web</td>
            <td className="deposit">R$ 2.000</td>
            <td>Trabalho</td>
            <td>17/05/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento web</td>
            <td className="withdraw">- R$ 2.000</td>
            <td>Trabalho</td>
            <td>17/05/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento web</td>
            <td className="deposit">R$ 2.000</td>
            <td>Trabalho</td>
            <td>17/05/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento web</td>
            <td className="withdraw">- R$ 2.000</td>
            <td>Trabalho</td>
            <td>17/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export { TransitionsTable }
