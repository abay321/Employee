import React, { useState } from "react";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import { Button, message, Space, Table, Tag, Modal, Input, Empty } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UserOutlined } from "@ant-design/icons";
import * as HiIcons from "react-icons/hi";
import { useParams } from "react-router-dom";

const EmployeeData = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddrress] = useState("");
  // const [editedData, setEditedData] = useState({});

  React.useEffect(() => {
    getEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:8000/Data/${id}`);
      message.success("suces");
      getEmployees();
    } catch (error) {
      console.error(error);
      message.error("failed to deleted");
    }
  };

  const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Data");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getEmployee = async (id) => {
    try {
      console.log(id);
      const response = await axios.get(`http://localhost:8000/Data/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // MODAL
  const showModal = (id) => {
    // console.log(id)
    if (id) {
      getEmployee(id);
    }
    setIsModalOpen(true);
  };

  const handleOk = async (event) => {
    event.preventDefault();
    await axios
      .put(`http://localhost:8000/Data/${id}`, data)
      .then(() => {
        message.success("succes");
      })
      .catch((err) => {
        message.error("failed");
        console.log(err);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // MODAL

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",

      render: (text) => <span>{text}</span>,
      width: "100px",
      className: "columnName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => {
              handleDelete(record.id);
            }}
          >
            <AiIcons.AiOutlineDelete />
          </Button>
          <Button
            type="primary"
            onClick={() => {
              showModal(record.id);
            }}
          >
            <AiIcons.AiOutlineEdit />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className="form">
          <Input
            className="input-name"
            size="large"
            placeholder="name"
            value={""}
            addonBefore={<UserOutlined />}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Input
            className="input-email"
            size="large"
            placeholder="email"
            value={""}
            addonBefore={<HiIcons.HiOutlineMail />}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <TextArea
            className="input-address"
            rows={2}
            placeholder="Address"
            maxLength={20}
            value={""}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </form>
      </Modal>
      <div>Employee Data</div>
      {/* //   npx json-server --watch data/db.json --port 8000 */}
      <div>
        <Table
          className="tablee"
          columns={columns}
          dataSource={data.map((dat) => {
            return {
              key: dat.id,
              id: dat.id,
              name: dat.name,
              email: dat.email,
              address: dat.address,
            };
          })}
        />
      </div>
    </div>
  );
};

export default EmployeeData;
