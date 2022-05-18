import { useState } from 'react'

import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'

function App () {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <NewTransactionModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <Header setModalIsOpen={openModal} />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}

export { App }
