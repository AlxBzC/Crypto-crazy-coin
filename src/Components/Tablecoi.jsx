
import React from 'react'
import CoinRow from './CoinRow'

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']
const Tablecoi = ({ coins, search }) => {
const filterCoins = coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()) | 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map(title => (
                            <td>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filterCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index} />
                ))}
            </tbody>

        </table >
    )
}

export default Tablecoi