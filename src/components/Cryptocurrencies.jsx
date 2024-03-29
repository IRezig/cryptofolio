import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from "react-router-dom"
import { Card, Col, Row, Input } from "antd"
import { useGetCryptosQuery } from '../services/cryptoAPI';
import Loading from './Loading';

export default function Cryptocurrencies({ simplified }) {

  const count = simplified ? 8 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  
  if(isFetching) return <Loading />

  return (
    <>
    { !simplified &&
      (<div className="search-crypto">
        <Input 
          placeholder='Search CryptoCurrency'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>)
    }
      <Row gutter={[32, 32]} className='crypto-card container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id} >
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={ <img className='crypto-image' src={currency.iconUrl} alt='crypto-img' /> }
                hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}
