import React from 'react'
import './account.scss'

const Account = () => {
  return (
    <div className='container'>

      {/* last block */}

      
      <div className="block3">
      <div className='inner_block3'>
      <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Your Balance</h2>
            </div>
            <div className="card_value card_value_acc">
             <h2>$0.00</h2>
            </div>
          </div>
      </div>

      <div className='inner_block3'>
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>APY</h2>
            </div>
            <div className="card_value card_value_acc">
             <h2>388,047%</h2>
            </div>
          </div>
      </div>
        <div className='inner_block3'>
        <div className='dashboard-card'>
            <div className='card_title'>
            <h2>Next Rebase</h2>
            </div>
            <div className="card_value card_value_acc">
             <h2>00:10:21</h2>
            </div>
          </div>
      </div>

      </div>
      <div className='block4'>
          <div className="row">
            <div className='title_card'>
                <h2>Current AMBR Price</h2>
            </div>

            <div className='value'>
            <h2>$0.00</h2>
            </div>
          </div>

          <div className="row">
            <div className='title_card'>
            <h2>Next Reward Amount</h2>
            </div>

            <div className='value'>
            <h2>0 Token</h2>
            </div>
          </div>



          <div className="row">
            <div className='title_card'>
                <h2>Reward Amount USD</h2>
            </div>

            <div className='value'>
            <h2>$0</h2>
            </div>
          </div>



          <div className="row">
            <div className='title_card'>
            <h2>Next Reward Yield</h2>
            </div>

            <div className='value'>
            <h2>0.00236%</h2>
            </div>
          </div>



          <div className="row">
            <div className='title_card'>
        <h2>ROI(1-Day Rate) USD</h2>
            </div>

            <div className='value'>
            <h2>$0</h2>
            </div>
          </div>



          <div className="row">
            <div className='title_card'>
            <h2>ROI(5-Day Rate)</h2>
            </div>

            <div className='value'>
            <h2>12 %</h2>
            </div>
          </div>



          <div className="row">
            <div className='title_card'>
            <h2>ROI(5-Day Rate) USD</h2>
            </div>

            <div className='value'>
            <h2>$0</h2>
            </div>
          </div>



      </div>
    </div>
  )
}

export default Account;