import Axios from 'axios';
import { ROOT_SERVER_URL } from 'constants/mainConfig';

const url = `${ROOT_SERVER_URL}/posts`;

export const fetchPosts = () => Axios.get(url);
export const createPost = (newPost) => Axios.post(url, newPost);
export const deletePost = (id) => Axios.delete(`${url}/${id}`);
export const updatePost = (id, updatedPost) =>
  Axios.patch(`${url}/${id}`, updatedPost);
export const likePost = (id) => Axios.patch(`${url}/${id}/likePost`);
