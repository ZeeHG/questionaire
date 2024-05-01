import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { LOGIN_PATH } from "../router";
import { UseDispatch, useDispatch } from "react-redux";
import { getUserInfoService } from "../services/user";
import { removeToken } from "../utils/user-token";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { logoutReducer } from "../store/userReducer";
const UserInfo: FC = () => {
  const nav = useNavigate();
  const { username, nickname } = useGetUserInfo();
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutReducer());
    removeToken();
    message.success("退出成功");
    nav(LOGIN_PATH);
  }
  return (
    <>
      <span style={{ color: "e8e8e8" }}>
        <UserOutlined></UserOutlined>
        {nickname}
        <Link to={LOGIN_PATH}>登录</Link>
      </span>
    </>
  );
};

export default UserInfo;
