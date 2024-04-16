import React, { FC } from "react";
import { Button, Divider, Space, Tag, Popconfirm, Modal, message } from "antd";
import {
  EditOutlined,
  FormOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import styles from "./Logo.module.scss";
import { Link, useNavigate } from "react-router-dom";

type PropsType = {
  _id: string;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props;
  const { confirm } = Modal;
  const nav = useNavigate();
  function duplicate() {
    message.success("成功复制");
  }
  function del() {
    confirm({
      title: "确定删除该问卷？",
      icon: <ExclamationOutlined></ExclamationOutlined>,
      onOk: () => message.success("成功复制"),
    });
  }
  return (
    <div>
      className={styles.container}
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? "/question/stat/${_id}" : "/question/edit/${_id}"}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }}></StarOutlined>}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          {isPublished ? (
            <Tag color="processing">已发布</Tag>
          ) : (
            <Tag>未发布</Tag>
          )}
          & nbsp;
          <span>答卷:{answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <Divider style={{ margin: "12px 0" }}></Divider>
      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => {
                nav("/question/edit/${_id}");
              }}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => {
                nav("/question/stat/${_id}");
              }}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={<StarOutlined />}
              type="text"
              size="small"
              onClick={() => {
                nav("/question/edit/${_id}");
              }}
            >
              {isStar ? "星标" : "取消星标"}
            </Button>
            <Popconfirm
              title="确定复制该问卷"
              okText="确定"
              onCancel={duplicate}
            >
              <Button
                icon={<CopyOutlined />}
                type="text"
                size="small"
                onClick={() => {
                  nav("/question/edit/${_id}");
                }}
              >
                复制
              </Button>
            </Popconfirm>

            <Button
              icon={<DeleteOutlined />}
              type="text"
              size="small"
              onClick={() => {
                nav("/question/edit/${_id}");
              }}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
