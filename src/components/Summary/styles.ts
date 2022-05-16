import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: -6rem;
  
  div {
    background: var(--shape);
    padding: 2rem;
    border-radius: 5px;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2.25rem;
      margin-top: 1rem;
      font-weight: 500;
    }
  }
`

export { Container }
