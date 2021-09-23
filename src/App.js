import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
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
      <div className='footer'>
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse, <br />
          All right reserverd
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='exchanges'>exchanges</Link>
          <Link to='News'>News</Link>
        </Space>
      </div>
    </div>
  )
}
