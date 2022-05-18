import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { createServer } from 'miragejs'

createServer({
  routes () {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: '1',
          title: 'Desenvolvimento site',
          price: '1000',
          category: 'Renda',
          type: 'deposit',
          date: '17/05/2022'
        },
        {
          id: '2',
          title: 'Alimentacao',
          price: '500',
          category: 'Renda',
          type: 'withdraw',
          date: '17/05/2022'
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
