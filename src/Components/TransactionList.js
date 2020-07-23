import React from 'react';
import Transaction from './Transaction';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';

const TransactionList = (props) => {
    console.log(props);
    return (
        <Box>
            {props.transactions.map(tx => (
                <Transaction key={tx.id} id={tx.id} description={tx.description} amount={tx.amount} />
            ))}
        </Box>
    )
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

export default connect(mapStateToProps)(TransactionList);