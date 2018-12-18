import React from 'react';

import { fetchLatestPrice } from '../../util/stock_api_util';

const Sidebar = ({ currentUser }) => {
  const stocks = [];
  if (currentUser.shares_owned) {
    const shares = currentUser.shares_owned;
    const tickers = Object.keys(shares);
    for (let i = 0; i < tickers.length; i++) {
      const stockObj = {};
      stockObj["ticker"] = tickers[i];
      let num_shares = shares[tickers[i]];
      if (num_shares <= 0) {
        continue;
      } else {
        num_shares = String(num_shares);
        if (num_shares === "1") {
          num_shares = "1 Share";
        } else {
          num_shares += " Shares";
        }
        stockObj["num_shares"] = num_shares;
      }
      stocks.push(stockObj);
    }
  }

  const stockCard = (stock) => {
    return (
      <div className="stock-card-container">
        <div className="stock-card">
          <h4 className="ticker">{stock["ticker"]}</h4>
          <div>{stock["num_shares"]}</div>
          {/* <div>{fetchLatestPrice(stock["ticker"])["latestPrice"]}</div> */}
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">

        <div className="header-card-container">
          <div className="header-card">
            <h3>Stocks</h3>
          </div>
        </div>
        <div className="stocks-container">
          {stocks.map(stock => stockCard(stock))}
        </div>

        <div id="watchlist-header" className="header-card-container">
          <div className="header-card">
            <h3>Watchlist</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;