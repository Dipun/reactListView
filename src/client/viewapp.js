import React from 'react';
import '../client/viewapp.css';
import { Typography,Table,Button,Modal,Divider } from 'antd';
import 'antd/dist/antd.css';
import AddEmployeePage from './addEmployeePage';
import importData from '../data';
const { Column } = Table;

const { Title } = Typography;
const axios = require('axios');

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allData : [],
      visible: false
    };

  };
  componentDidMount(){
    axios.get('http://localhost:5000/filmPeoples')
    .then(res =>{
      console.log(res.data.doc);
      this.setState({allData:res.data.doc})
    })
  //   console.log(importData.data);
  //   importData.data.map(selectData =>{
  //   // console.log(selectData.name);
  //   axios.post('http://localhost:5000/filmPeoples',{
  //     index: selectData.index,
  //     name: selectData.name,
  //     age:selectData.age,
  //     eyeColor: selectData.eyeColor,
  //     gender: selectData.gender,
  //     company: selectData.company,
  //     email: selectData.email
  //   })
  //   .then(res =>{
  //     console.log('data inserted');
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  //  })
  }

   columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'EyeColor',
      dataIndex: 'eyeColor',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      render: record=>{
        console.log(record)
        return(
          <div>
            <Button type="primary" onClick={(record)=>console.log(record)}>EDIT</Button>
            <Divider type="vertical" />
            <Button type="primary" onClick={(record)=>console.log(record)}>DELETE</Button>
          </div>
        )
      }
    },
  ];
  showModal = (e) => {
    // this.setState({
    //   visible: true,
    // });
    console.log(e);
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  
  render(){
  return (
    <div>
      <header className= "header">
        Employees Details
      </header>
      <div>
        <Title className='Title'> Details List View</Title>
        <Button type="primary" onClick={this.showModal}>Add Employe</Button>
        <Modal
          title="Add Employee"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddEmployeePage />
        </Modal>

      </div>
      <div>
      <Table  columns={this.columns} dataSource={this.state.allData}>
      {/* <Column title="Name" dataIndex="name" key="name" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="EyeColor" dataIndex="eyeColor" key="eyeColor" />
      <Column title="Gender" dataIndex="gender" key="gender" />
      <Column title="Company" dataIndex="company" key="company" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Action" dataIndex="action" key="action" render={(text, record) => (
        <span>
          <a>Edit {record}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      )}/> */}
      </Table>
      </div>

    </div>
  );
  }
  
}

export default App;
