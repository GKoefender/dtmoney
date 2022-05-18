import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds (server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2022-05-17 06:02:23')
        },
        {
          id: 2,
          title: 'Alimentação',
          type: 'withdraw',
          category: 'Almoço',
          amount: 500,
          createdAt: new Date('2022-05-12 06:02:23')
        }
      ]
    })
  },

  routes () {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const transaction = JSON.parse(request.requestBody)
      return schema.create('transaction', transaction)
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
