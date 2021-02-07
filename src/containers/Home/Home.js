import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import Posts from 'containers/Posts/Posts';
import CreatePostForm from 'containers/Posts/CreatePostForm/CreatePostForm';
import { getPosts } from 'redux/actions/posts';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CreatePostForm currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
