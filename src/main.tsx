import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Web3ReactProvider, Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import allConnections from './connectors'
const connections: [Connector, Web3ReactHooks][] = allConnections.map(([connector, hooks]) => [connector, hooks])

createRoot(document.getElementById('root')!).render(
  <Web3ReactProvider connectors={connections}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Web3ReactProvider>,
)
