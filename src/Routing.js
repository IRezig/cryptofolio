import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Homepage, Exchanges, News, CryptoDetails, Cryptocurrencies, Profile } from './components'

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
      <Route exact path='/crypto/:coinId'>
        <CryptoDetails />
      </Route>
      <Route exact path='/news'>
        <News />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
    </Switch>
  )
}
