import React, { FC } from "react";
import { Empty, Typography, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import styles from "./common.module.scss";
import QuestionCard from "../../component/QuestionCard";
import ListSearch from "../../component/ListSearch";
import { useTitle } from "ahooks";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
const Star: FC = () => {
  const { Title } = Typography;
  useTitle("星标问卷");
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true });
  const { List = [], total = 0 } = data;
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: "center" }}>
            <Spin></Spin>
          </div>
        )}
        {loading && List.length === 0 && <Empty description="暂无数据"></Empty>}
        {List.length > 0 &&
          List.map((q: any) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
    </>
  );
};
export default Star;
