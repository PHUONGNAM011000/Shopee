import axios from "axios";
import LocalStorage from "../constants/LocalStorage";

// goi getUser can token
// goi product ko can token

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.response.use(
      (response) => {
        const result = { ...response.data, ...response.status };
        return result;
      },
      ({ response }) => {
        const result = { ...response.data, ...response.status };
        return Promise.resolve(result);
      }
    );
    this.instance.interceptors.request.use(
      (confirm) => {
        const accessToken = localStorage.getItem(LocalStorage.accessToken);
        if (accessToken) {
          confirm.headers.authorization = accessToken;
        }
        return confirm;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }
  get(url, config = null) {
    return this.instance.get(url, config);
  }
  post(url, data, config = null) {
    return this.instance.push(url, data, config);
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, { data, ...config });
  }
}

const http = new Http();

export default http;
