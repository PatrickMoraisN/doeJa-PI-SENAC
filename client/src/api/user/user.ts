import axios from "axios";

const usersRoute = "http://localhost:3334/users";
const userRoute = "http://localhost:3334/user";
const sessionRoute = "http://localhost:3334/sessions";

const userAPI = {
  async createUser(data: any): Promise<any> {
    const response = await axios.post(usersRoute, data);

    return response;
  },
  async createSession(data: any): Promise<any> {
    const response = await axios.post(sessionRoute, data);
    return response;
  },
  async updateUser(data: any, token: string): Promise<any> {
    const response = await axios.put(usersRoute, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  async getUser(token: string): Promise<any> {
    const response = await axios.get(userRoute, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
  async deleteUser(token: string): Promise<any> {
    const response = await axios.delete(usersRoute, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};

export default userAPI;
