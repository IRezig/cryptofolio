import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Homepage, Exchanges, News, CryptoDetails, Cryptocurrencies  } from './components'

export default function Routing() {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/exchanges'>
        <Exchanges />
      </Route>
      <Route exact path='/cryptocurrencies'>
        <Cryptocurrencies />
      </Route>
      <Route exact path='/crypto/:coinID'>
        <CryptoDetails />
      </Route>
      <Route exact path='/news'>
        <News />
      </Route>
    </Switch>
  )
}
