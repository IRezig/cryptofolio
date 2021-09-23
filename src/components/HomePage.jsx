import React from 'react'
import millify from 'millify'
import { Typography, Col, Row, Statistic } from 'antd'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const { Title } = Typography
  return (
    <>
      <Title level={2} className='heading' >Global Cryptos State</Title>
      <Row>
        <Col span={12} > <Statistic title='Total cryptocurrencies' value='5'/></Col>
        <Col span={12} > <Statistic title='Total Exchanges' value='5'/></Col>
        <Col span={12} > <Statistic title='Total Market Cap' value='5'/></Col>
        <Col span={12} > <Statistic title='Total 24h volume' value='5'/></Col>
        <Col span={12} > <Statistic title='Total Market' value='5'/></Col>
      </Row>
    </>
  )
}
