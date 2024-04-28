import React, { FC, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { MANAGE_INDEX_PATH } from "../router";
import styles from "./Home.module.scss";
import "../_mock/index";
import axios from "axios";
const Home: FC = () => {
  const { Title, Paragraph } = Typography;
  const nav = useNavigate();
  useEffect(() => {
    axios.get("/api/test").then((data) => console.log("fetch data", data));
  }, []);
  return (
    <div>
      <div>
        <Title>问卷调查|在线投票</Title>
        <Paragraph>累计创建问卷，发布答卷，收到答卷</Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => nav(MANAGE_INDEX_PATH)}
          ></Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
