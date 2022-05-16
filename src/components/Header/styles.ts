import styled from 'styled-components'

const Container = styled.header`
  background: var(--blue);
  height: 212px; 
`

const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    padding: 1rem 2rem; 
    background: var(--blue-light);
    border: none;
    border-radius: 5px;
    color: var(--shape);
    font-weight: bold;

    transition: 0.3s filter;
    &:hover {
      filter: brightness(90%);
    }
  }
`

export { Container, Content }
