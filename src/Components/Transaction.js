import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 275,
    }
  });

const Transaction = (props) => {
    const classes = useStyles();

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
                </CardContent>
            </Card>
        </Box>
    )
}

export default Transaction
