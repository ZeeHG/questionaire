import { useState, useEffect } from "react";
import { useRequest } from "ahooks";
import { UseDispatch, useDispatch } from "react-redux";
import useGetUserInfo from "./useGetUserInfo";
import getUserInfoService from "../services/user";
import { loginReducer } from "../store/userReducer";
function useLoadUserData() {
  const dispatch = useDispatch();
  const [waitingUserData, setWaitingUserData] = useState(true);
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result;
      dispatch(loginReducer({ username, nickname }));
    },
    onFinally() {
      setWaitingUserData(false);
    },
  });
  const { username } = useGetUserInfo();
  useEffect(() => {
    if (username) {
      setWaitingUserData(false);
    }
  }, []);
  run();
  return { waitingUserData };
}

export default useLoadUserData;
