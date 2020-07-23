import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
      '& .MMuiCardContent-root': {
        margin: theme.spacing(2),
        width: 200,
      },
    },
  }));


const Transaction = (props) => {

    const styles = makeStyles();

    return (
        <Box mb={5}>
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h6">
                    {props.description}
                </Typography>
                <Typography variant="h6">
                    {props.amount}
                </Typography>
            </CardContent>
        </Card>
        </Box>
    )
}

export default Transaction
