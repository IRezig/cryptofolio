import React, { useState } from 'react'
import moment from 'moment'
import { Col, Row, Select, Typography, Avatar, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoAPI';
import Loading from './Loading';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Text, Title } = Typography;
const {Option} = Select;

export default function News({simplified}) {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 12});
  if(!cryptoNews?.value) return <Loading />


  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24} >
          <Select
            showSearch
            className='select-news'
            placeholder='Select a crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase() >0) }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin)=> (
              <Option value={coin.name}> {coin.name} </Option>
            ))}
          </Select>
        </Col>
      )
        

      }
      {cryptoNews.value.map((news)=> (
        <Col xs={24} sm={12} lg={8} key={news.id}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4} > {news.name} </Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news' style={{maxHeight:'100px', maxWidth: '200px'}} />
              </div>
              <p>
                {news.description > 100 ?
                  `${news.description.substring(0, 100)}...` :
                  news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                  <Text className='provider-name'> {news.provider[0]?.name} </Text>
                </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>

              </div>
            </a>

          </Card>
        </Col>
      ))}

    </Row>
  )
}
