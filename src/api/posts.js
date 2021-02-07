import Axios from 'axios';
import { ROOT_SERVER_URL } from 'constants/mainConfig';

const baseURL = `${ROOT_SERVER_URL}/posts`;

export const fetchPosts = () => Axios.get(baseURL);
export const createPost = (newPost) => Axios.post(baseURL, newPost);
export const deletePost = (id) => Axios.delete(`${baseURL}/${id}`);
export const updatePost = (id, updatedPost) =>
  Axios.patch(`${baseURL}/${id}`, updatedPost);
export const likePost = (id) => Axios.patch(`${baseURL}/${id}/likePost`);
