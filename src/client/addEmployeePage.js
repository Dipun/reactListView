import React from 'react'
import { Input,Button } from 'antd';
const axios = require('axios');

function addEmployeePage() {
    let newData={
        name:"",
        age:"",
        eyeColor:"",
        gender:"",
        company:"",
        email:""
    }
    let handleChange =(event)=>{
        console.log(event.target.id);
        switch (event.target.id) {
          case "name":
            newData.name = event.target.value;
            break;
          case "age":
            newData.age = event.target.value;
            break;
          case "eyeColor":
            newData.eyeColor = event.target.value;
            break;
          case "gender":
            newData.gender = event.target.value;
            break;
          case "company":
            newData.company = event.target.value;
            break;
          case "email":
            newData.email = event.target.value;
            break;
        }
 
    }
    const onSubmit = (event)=>{
console.log(newData);
    axios.post('http://localhost:5000/filmPeoples',{
      name: newData.name,
      age:newData.age,
      eyeColor: newData.eyeColor,
      gender: newData.gender,
      company: newData.company,
      email: newData.email
    })
    .then(res =>{
      console.log(res +'-data inserted');
    })
    .catch(err =>{
      console.log(err);
    })
    }
    return (
        <div>
            Name:
            <Input  placeholder="Full Name" id='name' onChange={handleChange}></Input>
            Age:
            <Input  placeholder="Enter Age" id='age'onChange={handleChange}></Input>
            EyeColor:
            <Input  placeholder="Enter EyeColor" id='eyeColor'onChange={handleChange}></Input>
            Gender:
            <Input  placeholder="Enter Gender" id='gender'onChange={handleChange}></Input>
            Company:
            <Input  placeholder="Company" id='company'onChange={handleChange}></Input>
            Email:
            <Input  placeholder="Enter Valid Email" id='email'onChange={handleChange}></Input>
            <div>
            <Button type="primary"onClick={onSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default addEmployeePage;
