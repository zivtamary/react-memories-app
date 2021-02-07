import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteModal from './DeletePostModal/DeletePostModal';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { deletePost, likePost } from 'redux/actions/posts';

import useStyles from './styles';
import { formatDateFromNow } from 'utils/formatters';

const Post = ({ post, setCurrentId }) => {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  const onDelete = () => {
    dispatch(deletePost(post._id));
    handleClose();
  };

  const handleClickOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.creator}</Typography>
          <Typography variant='body2'>
            {formatDateFromNow(post.createdAt)}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            style={{ color: 'white' }}
            size='small'
            onClick={handleClick}>
            <MoreHorizIcon fontSize='default' />
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}>
            <MenuItem
              onClick={() => {
                setCurrentId(post._id);
                handleCloseMenu();
              }}>
              Edit
            </MenuItem>
          </Menu>
        </div>
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant='h5'
          component='h2'>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize='small' />
            &nbsp;Like&nbsp;{post.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={handleClickOpen}>
            <DeleteIcon fontSize='small' /> Delete
          </Button>
        </CardActions>
      </Card>
      <DeleteModal
        showModal={showModal}
        onClose={handleClose}
        onDelete={onDelete}
      />
    </>
  );
};

export default Post;
