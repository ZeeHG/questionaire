import React, { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button, Space, Divider, message } from "antd";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useRequest } from "ahooks";
import { createQuestionService } from "../services/question";
import styles from "./ManageLayout.module.scss";

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const {
    loading,
    data,
    run: handleCreateClick,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(result) {
      nav("/question/edit / $fresult.id}");
      message.success("创建成功");
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
            disabled={loading}
          >
            创建问卷
          </Button>
          <Divider style={{ borderTop: "transparent" }}></Divider>
          <Button
            type={pathname.startsWith("./manage/list") ? "default" : "text"}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => {
              nav("/manage/List");
            }}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith("./manage/star") ? "default" : "text"}
            size="large"
            icon={<StarOutlined />}
            onClick={() => {
              nav("/manage/Star");
            }}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith("./manage/trash") ? "default" : "text"}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => {
              nav("/manage/Trash");
            }}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>footer</div>
    </div>
  );
};
export default ManageLayout;
