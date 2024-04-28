import React, { FC } from "react";
import { Typography, Space, Form, Input, Button, Checkbox } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_PATH } from "../router";
import styles from "./Login.module.scss";
const Login: FC = () => {
  const nav = useNavigate();
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
          <Item wrapperCol={{ span: 16, offset: 6 }}>
            <Checkbox>记住我 </Checkbox>
          </Item>

          <Item wrapperCol={{ span: 16, offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATH}>注册新用户</Link>
            </Space>
          </Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
