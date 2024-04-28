import React, { FC } from "react";
import { Typography, Space, Form, Input, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LOGIN_PATH } from "../router";
import styles from "./register.module.scss";
const Register: FC = () => {
  const { Title } = Typography;
  const { Item } = Form;
  const onFinish = (value: any) => {};
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>

      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Item label="用户名" name="username">
            <Input></Input>
          </Item>
          <Item label="密码" name="username">
            <Input.Password></Input.Password>
          </Item>
          <Item label="确认密码" name="confirm">
            <Input.Password></Input.Password>
          </Item>
          <Item label="昵称" name="nickname">
            <Input></Input>
          </Item>
          <Item wrapperCol={{ span: 16, offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATH}>已有账户 请登录</Link>
            </Space>
          </Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
