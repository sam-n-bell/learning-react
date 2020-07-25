import React from 'react';
import PostList from '../Components/PostList'
import {Grid} from '@material-ui/core'

const TransactionLayout = () => {
    return (
        <Grid container spacing={3}>
            <Grid item>
                <PostList/>
           </Grid>
        </Grid>
    )
}

export default TransactionLayout;