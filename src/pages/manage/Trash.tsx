import React, { FC, useState } from "react";
import {
  Typography,
  Empty,
  Table,
  Tag,
  Space,
  Button,
  Modal,
  Spin,
} from "antd";
import { useSearchParams } from "react-router-dom";
import styles from "./common.module.scss";
import QuestionCard from "../../component/QuestionCard";
import { ExclamationOutlined } from "@ant-design/icons";
import ListSearch from "../../component/ListSearch";
import ListPage from "../../component/ListPage";
import { useTitle } from "ahooks";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
const List: FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedIds, setSelectedIds] = useState<String[]>([]);
  const { Title } = Typography;
  const { confirm } = Modal;
  useTitle("回收站");
  const { data = {}, loading } = useLoadQuestionListData({ isDeleted: true });
  const { List = [], total = 0 } = data;

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
        dataSource={List}
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
        <div className={styles.right}>
          {" "}
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: "center" }}>
            <Spin></Spin>
          </div>
        )}
        {List.length === 0 && <Empty description="暂无数据"></Empty>}
        {List.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </>
  );
};
export default List;
