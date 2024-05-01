import React, { FC, useState, useEffect } from "react";
import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { HOME_PATH, MANAGE_INDEX_PATH } from "../router";
import useGetUserInfo from "../hooks/useGetUserInfo";
const Logo: FC = () => {
  const { Title } = Typography;
  const { username } = useGetUserInfo();
  const [pathname, setPathname] = useState(HOME_PATH);
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_INDEX_PATH);
    }
  }, [username]);
  return (
    <div className={styles.container}>
      <Link to="  /">
        <Space>
          <Title>
            <FormOutlined></FormOutlined>
          </Title>
          <Title>问卷星</Title>
        </Space>
      </Link>
    </div>
  );
};
export default Logo;
