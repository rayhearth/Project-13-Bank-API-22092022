import React from 'react';
import { FaChevronUp } from "react-icons/fa"

const TableTransaction = () => {



    return (
        <div className='tableTransaction'>
            <div className="title">
                <h3></h3>
                <h3>Date</h3>
                <h3>Description</h3>
                <h3>Amount</h3>
                <h3>Balance</h3>
            </div>
            <div className="datas">
                <FaChevronUp />
                <p className="date">June 20th</p>
                <p className="desc">golden Sun Bakery</p>
                <p className="amount">5$00</p>
                <p className="balance">$2000</p>
            </div>
            <div className="datas">
                <FaChevronUp />
                <p className="date">June 20th</p>
                <p className="desc">golden Sun Bakery</p>
                <p className="amount">10$00</p>
                <p className="balance">$2000</p>
            </div>
            <div className="datas">
                <FaChevronUp />
                <p className="date">June 20th</p>
                <p className="desc">golden Sun Bakery</p>
                <p className="amount">20$00</p>
                <p className="balance">$2000</p>
            </div>
            <div className="datas">
                <FaChevronUp />
                <p className="date">June 20th</p>
                <p className="desc">golden Sun Bakery</p>
                <p className="amount">30$00</p>
                <p className="balance">$2000</p>
            </div>
            <div className="datas">
                <FaChevronUp />
                <p className="date">June 20th</p>
                <p className="desc">golden Sun Bakery</p>
                <p className="amount">40$00</p>
                <p className="balance">$2000</p>
            </div>
            <div className="datas">
                <FaChevronUp />
                <p className="date">June 20th</p>
                <p className="desc">golden Sun Bakery</p>
                <p className="amount">50$00</p>
                <p className="balance">$2000</p>
            </div>
        </div>
    );
};

export default TableTransaction;