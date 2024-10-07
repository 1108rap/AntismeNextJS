"use client";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Card } from "antd";
import style from "../auth/authpage.module.css";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("failed", errorInfo);
};

const AuthForm = () => {
  return (
    <div className={style.center}>
      <Card
        title="Authentication Login"
        bordered={false}
        style={{ width: 600 }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Input Username */}
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please Input Your Username!" }]}
          >
            <Input />
          </Form.Item>

          {/* Input Password */}
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please Input Your Password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {/* Input Remember */}
          <Form.Item<FieldType>
            name="remember"
            valuePropName="Checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AuthForm;
