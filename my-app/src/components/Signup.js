import React, { useState } from "react";
import "./signup.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from 'react-router-dom'
import Login from "../components/Login"

const App = (prop) => {
  const [value , setValue] = useState("")
  console.log(prop);
  const onFinish = (values) => {
    console.log("Success:", values);
    // prop.getData(values)
    setValue(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signup">
      <h1>Sign up</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="login-signup-btn">
           {/* {console.log(value)} */}
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => prop.getData(value)}
              >
                Submit
              </Button>
              <div>
                <Button>
                  <Link to="/login" >Login</Link>
                </Button>
              </div>
            
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
