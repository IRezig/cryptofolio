import React from 'react'
import { Row, Col, Collapse, Typography, Avatar } from 'antd'
import HTMLReactParser from 'html-react-parser';
import millify from 'millify'
import { useGetExchangesQuery } from '../services/cryptoAPI'
import Loading from './Loading'
export default function Exchanges() {

  const { Text } = Typography;
  const { Panel } = Collapse;
  const { data, isFetching } = useGetExchangesQuery();

  if(isFetching) return <Loading />

  return (
    <>
      <Row>
        <Col span={6}>Exchange</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      {data?.data?.exchanges.map((exchange) => (
        <Col span={24}>
          <Collapse >
            <Panel 
              key={exchange.id}
              showArrow={false}
              header={(
                <Row>
                  <Col span={6}>
                    <Text> <strong> { exchange.rank }</strong> </Text> 
                    <Avatar className='exchange-image' src={exchange.iconUrl} />  
                    <Text> <strong> { exchange.name }</strong> </Text>  
                  </Col>
                  <Col span={6}> {millify(exchange.volume)} </Col>
                  <Col span={6}> {millify(exchange.numberOfMarkets)} </Col>
                  <Col span={6}> {millify(exchange.marketShare)} </Col>
                </Row>
                )} 
              >
              {HTMLReactParser(exchange.description || '')}
            </Panel>
          </Collapse>
        </Col>
      ))}
    </>
  )
}
