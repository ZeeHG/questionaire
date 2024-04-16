import React, { FC, useState } from "react";
import { Typography } from "antd";
import { useSearchParams } from "react-router-dom";
import styles from "./common.module.scss";
import QuestionCard from "../../component/QuestionCard";
const List: FC = () => {
  const [searchParams] = useSearchParams();
  const { Title } = Typography;
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
  const [quetionList, setQuestionlist] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {quetionList.length > 0 &&
          quetionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>分页</div>;
    </>
  );
};
export default List;
