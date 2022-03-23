import React from 'react'
import './dash.scss'

const Dash = () => {
  return (
    <div className='container'>
      <div className="block1">
        <div className="inner_block1">
          <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Token Price</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
        </div>
        <div className="inner_block1">
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Market Cap</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
        </div>
        <div className="inner_block1">
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Circulating Supply</h2>
            </div>
            <div className="card_value">
             <h2>0</h2>
            </div>
          </div>
        </div>
        <div className="inner_block1">
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Backed Liquidity</h2>
            </div>
            <div className="card_value">
             <h2>100%</h2>
            </div>
          </div>
        </div>
        <div className="inner_block1">
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Next Rebase</h2>
            </div>
            <div className="card_value">
            <h2>00:12:30</h2>
            </div>
          </div>
        </div>
        <div className="inner_block1">
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Total Supply</h2>
            </div>
            <div className="card_value">
             <h2>386,481</h2>
            </div>
          </div>
        </div>
      </div>



{/* second block started */}



      <div className="block2">
      <div className='inner_block2'>
      <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Current Price</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      <div className='inner_block2'>
      <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Market Value of Treasury Asset</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      </div>

      {/* third block started */}


      
      <div className="block2">
      <div className='inner_block2'>
      <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Pool Value</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      <div className='inner_block2'>
      <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Ambr Insurance Fund Value</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      </div>


      {/* last block */}

      
      <div className="block3">
      <div className='inner_block3'>
      <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Current Price</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      <div className='inner_block3'>
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Market Value of Treasury Asset</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>
        <div className='inner_block3'>
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Market Value of Treasury Asset</h2>
            </div>
            <div className="card_value">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      </div>
    </div>
  )
}

export default Dash