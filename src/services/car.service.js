import axios from "axios";

export const CarService = {
  async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  },

  async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?id=${id}`
    );
    return response.data[0];
  },
};
