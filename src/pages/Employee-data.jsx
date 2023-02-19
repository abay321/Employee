import React from 'react'

// import { Columns } from './colums/Colums'
import axios from 'axios';
import {  Space, Table, Tag } from 'antd'

const EmployeeData = () => {

  const[data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try{
      const response = await axios.get("http://localhost:8000/Data")
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',align: 'center',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <a>Delete</a>
        </Space>
      ),
    }
  ]
  
  

  return (
    <div>
      <div>Employee Data</div>
{/* //   npx json-server --watch data/db.json --port 8000 */}
      <div>
        <Table className='tablee' columns={columns} dataSource={data.map((dat) => {
          return {
            id: dat.id,
            name: dat.name,
            age: dat.age,
            address: dat.address
          }
        })} />
      </div>
    </div>
  )
}

export default EmployeeData