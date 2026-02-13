import axios from 'axios'

export const api=axios.create(
    {
        baseURL:"https://jsonplaceholder.typicode.com",
        timeout:10000,
    }
)
api.interceptors.request.use((config) => {
  const token = "dummy-token-123"; // simulate logged-in user

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("Request Sent:", config);
  return config;
});