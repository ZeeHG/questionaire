import React, { FC } from "react";
import { Typography, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import styles from "./common.module.scss";
import QuestionCard from "../../component/QuestionCard";
import ListSearch from "../../component/ListSearch";
import { useTitle } from "ahooks";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
const List: FC = () => {
  useTitle("我的问卷");
  const { data = {}, loading } = useLoadQuestionListData();
  const { List = [], total = 0 } = data;
  const { Title } = Typography;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
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
        {loading &&
          List.length > 0 &&
          List.map((q: any) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>分页</div>;
    </>
  );
};
export default List;
