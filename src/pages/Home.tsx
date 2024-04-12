import React, { FC } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home: FC = () => {
  const nav = useNavigate();
  function handleOnclick() {
    nav("/login");
  }
  return (
    <div>
      Home
      <button onClick={handleOnclick}>登录</button>
      <Link to="/register"></Link>
    </div>
  );
};
export default Home;
