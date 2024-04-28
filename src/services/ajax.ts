import axios from "axios";
const instance = axios.create({
  timeout: 10 * 1000,
});

instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType;
  const { errno, data, msg } = resData;
  return data as any;
});
export default instance;
export type ResType = {
  errno: number;
  data: any;
  msg?: string;
};
export type ResDataType = {
  [key: string]: any;
};
