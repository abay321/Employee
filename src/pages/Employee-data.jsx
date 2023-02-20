import React from 'react'

// import { Columns } from './colums/Colums'
import axios from 'axios';

import * as AiIcons from 'react-icons/ai';
import {  Button, message, Space, Table, Tag } from 'antd'

const EmployeeData = () => {

  const[data, setData] = React.useState([]);
  
  React.useEffect(() => {
    fetchData();
  }, []);

  const API_PATH = "http://localhost:8000/Data"

  const handleDelete = async (id) => {
    try{
      await axios.delete(`${API_PATH}/${id}`)
      message.success('suces')
    } catch(error) {
      console.error(error)
      message.error('failed to deleted')
    }
  }

  const fetchData = async() => {
    try{
      const response = await axios.get(`${API_PATH}`)
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
        <>
          <Button
          type='primary'
          danger
          onClick={() => {handleDelete(record.id)}}
          >
            <AiIcons.AiOutlineDelete />
          </Button>
        </>
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