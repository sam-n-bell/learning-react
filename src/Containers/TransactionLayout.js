import React from 'react';
import TransactionInput from '../Components/TransactionInput'
import TransactionList from '../Components/TransactionList'
import {Grid} from '@material-ui/core'

const TransactionLayout = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TransactionInput/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TransactionList/>
            </Grid>
        </Grid>
    )
}

export default TransactionLayout;