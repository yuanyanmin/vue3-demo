import axios from "./request"
//请求示例
//get
export const loginApi = (data) => {
  return axios({
    url: "/api/login",
    method: "post",
    data
  })
}