import React from 'react'
import millify from 'millify'
import { Typography, Col, Row, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI';
import { Cryptocurrencies, News } from '../components';
import Loading from './Loading';

const { Title } = Typography
const HomePage = () => {
  
  const { data, isFetching } = useGetCryptosQuery(8);
  const globalStats = data?.data?.stats 
  if(isFetching) return <Loading />

  return (
    <>
      <Title level={2} className='heading' >Global Cryptos State</Title>
      <Row>
        <Col span={12} > <Statistic title='Total cryptocurrencies' value={globalStats?.total}/></Col>
        <Col span={12} > <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12} > <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12} > <Statistic title='Total 24h volume' value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12} > <Statistic title='Total Market' value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 Cryptocurrencies in the world</Title>
        <Title level={4} className="show-more"><Link to='/cryptocurrencies'> Show more </Link> </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Latest Crypto News</Title>
        <Title level={4} className="show-more"><Link to='/news'> Show more </Link> </Title>
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage;