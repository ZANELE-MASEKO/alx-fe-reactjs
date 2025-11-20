import axios from 'axios';

const API= import.meta.env.VITE_APP_GITHUB_API_KEY

export const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${API}`
    }
})

export const searchUser = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};