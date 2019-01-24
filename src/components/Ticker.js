import React from 'react'
import "./Ticker.css"

class Ticker extends React.Component{
    
    constructor(){
        super()
        this.state ={
            data: [
                {
                    id: 'bitcoin',
                    price: '1'
                },
                {
                    id: 'ethereum',
                    price: '1'
                },
                {
                    id: 'litecoin',
                    price: '1'
                },
            ]
        }
    }
    
    render(){
        var tickers = this.state.data.map((currency) =>
            <li key = {currency.id}>
                <h3>{currency.id}</h3>
                <h3>{currency.price} USD</h3>
            </li>
        );

        return(
            <div className="ticker-container">
                <div>
                    <ul className="tickers">{tickers}</ul>
                    <p>Inforamation updated every minutes </p>
                </div>
            </div>
        )
    }
}

export default Ticker