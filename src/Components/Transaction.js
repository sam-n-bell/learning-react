import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteTransaction } from '../store/actions'

const useStyles = makeStyles({
    root: {
      maxWidth: 275,
    }
  });

const Transaction = (props) => {
    const classes = useStyles();

    const deleteTransactionHandler = (id) => {
        //https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js
        props.dispatch(deleteTransaction(id))
    }
    console.log(props);
    return (
        <Box mb={5}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6">
                        <Grid container spacing={3}>
                            <Grid item xs={1}>({props.id})</Grid><Grid item xs={6}>{props.description}</Grid>
                        </Grid>
                    </Typography>
                    <Typography variant="h6">
                    <Grid container spacing={3}>
                            <Grid item xs={1}></Grid><Grid item xs={6}>{props.amount}</Grid>
                        </Grid>
                    </Typography>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2}><Button variant="contained" color="primary" onClick={() => deleteTransactionHandler(props.id)}>Delete</Button></Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default connect()(Transaction)
