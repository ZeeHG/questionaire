import React, { FC } from "react";
import { Outlet } from "react-router-dom";
const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayoutheader</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayoutfooter</div>
    </>
  );
};
export default MainLayout;
