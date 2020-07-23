import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import Transaction from './Transaction'
import {Box} from '@material-ui/core'

const TransactionList = (props) => {
    const [transactions, setTransactions] = useState([
        {id: 1, description: 'Test One', amount: 1.99},
        {id: 2, description: 'Test Two', amount: 2.99},
        
    ])
    return (
        <Box>
            {transactions.map(tx => (
                <Transaction key={tx.id} description={tx.description} amount={tx.amount}/>
            ))}
            </Box>
    )

}

export default TransactionList;