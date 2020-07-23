import React, { useState } from 'react';
import { TextField, Grid, Button, Box } from '@material-ui/core'
import { addTransaction } from '../store/actions'
import { connect } from 'react-redux'


const TransactionInput = ({ dispatch }) => {

    const [description, setDescription] = useState(null);
    const [amount, setAmount] = useState(0);

    const addTransactionHandler = (event) => {
        dispatch(addTransaction({description: description, amount: amount}))
    }

    return (

        <Grid container spacing={3}>
            <Grid item>
                <TextField label="Description" onChange={(event) => {setDescription(event.target.value)}} />
            </Grid>
            <Grid item>
                <TextField label="Amount" onChange={(event) => {setAmount(event.target.value)}} />
            </Grid>
            <Grid item>
                <Box mt={1}>
                    <Button variant="contained" color="primary" onClick={addTransactionHandler}>Enter</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default connect()(TransactionInput);