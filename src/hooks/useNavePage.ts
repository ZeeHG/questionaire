import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetUserInfo from "./useGetUserInfo";
import {
  LOGIN_PATH,
  MANAGE_INDEX_PATH,
  isLoginOrRegsiter,
  isNoNeedUserIfo,
} from "../router";
function useNavePage(waitingUserData: boolean) {
  const { username } = useGetUserInfo();
  const nav = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (waitingUserData) return;
    if (username) {
      if (isLoginOrRegsiter(pathname)) {
        nav(MANAGE_INDEX_PATH);
      }
      return;
    }
    if (isNoNeedUserIfo(pathname)) {
      return;
    } else {
      nav(LOGIN_PATH);
    }
  }, [waitingUserData, username, pathname]);
}

export default useNavePage;
