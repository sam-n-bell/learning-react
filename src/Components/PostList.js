import React from 'react';
import { Grid, Button, Box } from '@material-ui/core'
import { connect } from 'react-redux'
import { getPosts } from '../store/actions'
import Post from './Post';

const mapStateToProps = (state) => ({
    posts: state.posts
})

export const PostList = (props) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => props.dispatch(getPosts())}>Get Posts</Button>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    {props.posts.payload.map(post => (
                        <Post key={post.id} title={post.title} />
                    ))}
                </Box>
            </Grid>

        </Grid>
    )
}

export default connect(mapStateToProps)(PostList);