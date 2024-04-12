import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
const ManageLayout: FC = () => {
  return (
    <div>
      <div className={styles.container}>header</div>
      <div className={styles.left}>
        <Outlet></Outlet>
      </div>
      <div className={styles.right}>footer</div>
    </div>
  );
};
export default ManageLayout;
