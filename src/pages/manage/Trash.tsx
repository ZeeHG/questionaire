import React, { FC, useState } from "react";
import { Typography, Empty, Table, Tag, Space, Button, Modal } from "antd";
import { useSearchParams } from "react-router-dom";
import styles from "./common.module.scss";
import QuestionCard from "../../component/QuestionCard";
import { ExclamationOutlined } from "@ant-design/icons";
const List: FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedIds, setSelectedIds] = useState<String[]>([]);
  const { Title } = Typography;
  const { confirm } = Modal;

  const rawQuestionList = [
    {
      _id: "q1",
      title: "问卷1",
      isPublished: false,
      isStar: false,
      answerCount: 5,
      createdAt: "3月10日13:23",
    },
    {
      _id: "q2",
      title: "问卷2",
      isPublished: true,
      isStar: true,
      answerCount: 3,
      createdAt: "3月11日13:23",
    },
    {
      _id: "q3",
      title: "问卷3",
      isPublished: false,
      isStar: false,
      answerCount: 4,
      createdAt: "3月11日13:23",
    },
    {
      _id: "q4",
      title: "问卷4",
      isPublished: true,
      isStar: false,
      answerCount: 2,
      createdAt: "3月9日 13:23",
    },
  ];
  const [questionList, setQuestionlist] = useState(rawQuestionList);
  const tableColumns = [
    {
      title: "标题",
      dataIndex: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "发布时间",
      dataIndex: "createdAt",
    },
  ];
  function del() {
    confirm({
      title: "确认彻底删除",
      icon: <ExclamationOutlined></ExclamationOutlined>,
      content: "删除后不可找回",
      onOk: () => alert(JSON.stringify(selectedIds)),
    });
  }
  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger>删除</Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {rawQuestionList.length === 0 && <Empty description="暂无数据"></Empty>}
        {questionList.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>分页</div>;
    </>
  );
};
export default List;
