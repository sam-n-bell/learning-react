import React, { useState } from 'react';
import { TextField, Grid, Button, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const TransactionInput = (props) => {

    const [description, setDescription] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState(0);

    const styles = useStyles();

    const addTransactionHandler = (event) => {
        let updated = [...transactions];
        updated.push({id: transactions.length + 1, description: description, amount: amount})
        setTransactions(updated)
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
            {/* <Grid item xs={12}>
                {transactions.map(tx => (
                    <Typography key={tx.id}>{tx.id} {tx.description} {tx.amount}</Typography>
                ))}
            </Grid> */}
        </Grid>
    )
}

export default TransactionInput;