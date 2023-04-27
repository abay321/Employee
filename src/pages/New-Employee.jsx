import React from "react";
import { useNavigate } from "react-router-dom";

import { Alert, Button, Form, Input, InputNumber, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import * as HiIcons from "react-icons/hi";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const NewEmployee = () => {
  const API_PATH = "http://localhost:8000/Data";
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${API_PATH}`, input)
      .then((respons) => {
        alert("data been add");
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div>New Data</div>
      <Space>
        <form className="form" onSubmit={handleSubmit}>
          <Input
            className="input-name"
            size="large"
            placeholder="name"
            addonBefore={<UserOutlined />}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <Input
            className="input-name"
            size="large"
            placeholder="email"
            addonBefore={<HiIcons.HiOutlineMail />}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <TextArea
            className="input-address"
            rows={2}
            placeholder="Address"
            maxLength={20}
            onChange={(e) => setInput({ ...input, address: e.target.value })}
          />
          <Button className="d" type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Space>
    </div>
  );
};

export default NewEmployee;
