'use strict'
const got = require('got')

let config = {
  apikey: '',
  secret: ''
}

const publicAPI = {
  ticker: (currency) => {
    const url = `https://api.bithumb.com/public/ticker/${currency}`
    got(url)
      .then(res => res.body)
      .then(res => {
        console.log(res)
      })
      .catch(err => {

      })
  },
  orderbook: () => {

  },
  recentTransaction: () => {

  }
}

const privateAPI = {
  account: () => {

  },
  balance: () => {

  },
  walletAddress: () => {

  },
  ticker: () => {

  },
  orders: () => {

  },
  userTransaction: () => {

  },
  place: () => {

  },
  orderDetail: () => {

  },
  cancel: () => {

  },
  btcWithdrawal: () => {

  },
  krwDeposit: () => {

  },
  krwWithdrawal: () => {

  },
  marketBuy: () => {

  },
  marketSell: () => {

  }
}

module.exports = {
  setConfig: (apikey, secret) => {
    if(!apikey || !secret) {
      return
    }
    config.apikey = ''
    config.secret = ''
  },
  publicAPI: publicAPI,
  privateAPI: privateAPI
}