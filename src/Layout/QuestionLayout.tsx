import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
import useLoadUserData from "../hooks/useLoadUserData";
import useNavePage from "../hooks/useNavePage";
const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData();
  useNavePage(waitingUserData);
  return (
    <div>
      <div className={styles.container}>header</div>
      <div className={styles.left}>{!waitingUserData && <Outlet />}</div>
      <div className={styles.right}>fotter</div>
    </div>
  );
};
export default QuestionLayout;
