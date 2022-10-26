import React from 'react';
import TransactionHeader from '@/components/UI/TransactionHeader';
import TableTransaction from '../../components/UI/TableTransaction';



const Transaction = () => {
    return (
        <div className='accountTransaction'>
            <TransactionHeader />
            <TableTransaction />

        </div>
    );
};

export default Transaction;