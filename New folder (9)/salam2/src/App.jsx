import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Modal, Input } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [companyTitle, setCompanyTitle] = useState("");
  let [editID, setEditID] = useState("");

  const handleOk = () => {
    console.log(editID);
    // let obj = {
    //   companyTitle: companyTitle,
    // };
    // axios.patch("https://northwind.vercel.app/api/suppliers");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "contact title",
      dataIndex: "contactTitle",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (value, record) => {
        return (
          <button
            onClick={(e) => {
              axios
                .delete(
                  "https://northwind.vercel.app/api/suppliers/" + record.id
                )
                .then((res) => {
                  console.log(res.data);
                  setData((currentData) =>
                    currentData.filter((x) => x.id !== record.id)
                  );
                });
            }}
          >
            Delete
          </button>
        );
      },
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "x",
      render: (record, value) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setIsModalOpen(true);
              setEditID(record.id);
            }}
          >
            Edit
          </Button>
          <Modal
            title="Edit"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <Input
                type="text"
                placeholder="contact title"
                onChange={(e) => {
                  setCompanyTitle(e.target.value);
                }}
              />
            </div>
          </Modal>
        </>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} rowKey={(record) => record.id} />
  );
}
export default App;
