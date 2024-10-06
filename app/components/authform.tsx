"use client";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

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
    <div className="">
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
          rules={[{ required: true, message: "Please Input Your Username !" }]}
        >
          <Input />
        </Form.Item>

        {/* Input Password */}
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please Input Your Password !" }]}
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
    </div>
  );
};

export default AuthForm;
