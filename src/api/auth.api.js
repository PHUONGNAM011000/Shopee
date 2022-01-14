import http from "./../utils/Http";

const authApi = {
  register(data) {
    return http.post("register", data);
  },
};

export default authApi;
