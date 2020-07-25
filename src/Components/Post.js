import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    }
});

const Post = (props) => {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item>{props.title}</Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default connect()(Post)
