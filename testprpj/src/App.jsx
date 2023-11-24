import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";

function App() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: {
        compare: (a, b) => a.companyName.localeCompare(b.companyName),
      },
    },
    {
      title: "City",
      dataIndex: ["address", "country"],
      filters: [
        {
          text: "Japan",
          value: "Japan",
        },
        {
          text: "German",
          value: "Germany",
        },
      ],
      onFilter: (value, record) => record?.address?.country?.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers/").then((res) => {
      setData(res.data);
    });
  }, []);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}

export default App;
