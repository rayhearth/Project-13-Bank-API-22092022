import React from 'react';



const Transaction = () => {
    return (
        <div className='accountTransaction'>
            <div className="title">
                <h3></h3>
                <h3>Date</h3>
                <h3>Description</h3>
                <h3>Amount</h3>
                <h3>Balance</h3>
            </div>
            <div className="datas">
                <i class="fa-sharp fa-solid fa-chevron-up"></i>
                <p className="date">June 20th</p>
                <p className="desc">golden</p>
                <p className="amount">5$</p>
                <p className="balance">$2000</p>
            </div>
            <div className="datas">
                <i class="fa-sharp fa-solid fa-chevron-up"></i>
                <p className="date">June 20th</p>
                <p className="desc">golden</p>
                <p className="amount">5$</p>
                <p className="balance">$2000</p>
            </div>
        </div>
    );
};

export default Transaction;