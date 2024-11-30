import axios from "axios";

// const BASE_URL = "http://172.20.43.162:8080";

const BASE_URL = "http://172.20.53.85:8080";
// const BASE_URL = "http://172.20.96.250:8000";

class API {
  async getAllPosts() {
    try {
      return await axios.get(`${BASE_URL}/getAll`);
    } catch (err) {
      //console.error(err);
      throw err;
    }
  }
  async getPost(postId) {
    try {
      return await axios.get(`${BASE_URL}/getOne/${postId}`);
    } catch (err) {
      //console.error(err);
      throw err;
    }
  }
  async createPost(data) {
    try {
      return await axios.post(`${BASE_URL}/postCreate`, data);
    } catch (err) {
      //console.error(err);
      throw err;
    }
  }

  async createPost(data) {
    try {
      return await axios.post(`${BASE_URL}/postCreate`, data);
    } catch (err) {
      //console.error(err);
      throw err;
    }
  }
  async updatePost(data) {
    try {
      return await axios.post(`${BASE_URL}/postUpdate`, data);
    } catch (err) {
      //console.error(err);
      throw err;
    }
  }
  async deletePost(data) {
    try {
      return await axios.post(`${BASE_URL}/postDelete`, data);
    } catch (err) {
      //console.error(err);
      throw err;
    }
  }
}

export default new API();
