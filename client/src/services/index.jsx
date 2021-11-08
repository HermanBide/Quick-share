import axios from "axios";


const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://quick-share-osos.herokuapp.com";

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// create a login function that takes in userInfo and returns the output of the /auth/login endpoint
export const login = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// logout does not need parameters (why?)
export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`);
  } catch (error) {
    console.error(error.message);
  }
}

// an exportable async function that gets all cartoons (apiURL/cartoons/)
export const getAllComments = async () => {
  try {
    const response = await axios.get(`${apiURL}/comments/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// called createCartoon or some name like that it should take in info on a new cartoon and use it for the data on a axios.post request to our POST /cartoons/ endpoint
export const newComment = async (newComment) => {
  try {
    await axios.post(`${apiURL}/comments/`, newComment);
  } catch (error) {
    console.error(error.message);
  }
}

export const deleteComment = async (newComment) => {
  try {
    await axios.delete(`${apiURL}/comments/post_id`, newComment);
  } catch (error) {
    console.error(error.message);
  }
}


// an exportable async function that gets all cartoons (apiURL/cartoons/)
export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${apiURL}/posts/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/posts/${id}`);
    return response.data
  } catch (error) {
    console.error(error.message);
  }
}

// called createCartoon or some name like that it should take in info on a new cartoon and use it for the data on a axios.post request to our POST /cartoons/ endpoint
export const createPost = async (newPost) => {
  try {
    await axios.post(`${apiURL}/posts/new`, newPost);
  } catch (error) {
    console.error(error.message);
  }
}

export const updatePost = async (id) => {
  try {
    await axios.put(`${apiURL}/posts/${id}`);
  } catch (error) {
    console.error(error.message);
  }
}

export const deletePost = async (id) => {
  try {
    await axios.delete(`${apiURL}/posts/${id}`,);
  } catch (error) {
    console.error(error.message);
  }
}

export const addFavorite = async (postId) => {
  try {
    const response = await axios.post(`${apiURL}/Movies/favorites/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}