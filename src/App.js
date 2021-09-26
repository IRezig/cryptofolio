import React from 'react'
import { Layout } from 'antd'
import { Navbar } from './components'
import Routing from './Routing'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routing />
          </div>
        </Layout>
      </div>
    </div>
  )
}
