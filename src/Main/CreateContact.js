import React from "react";
import { Form, Input, Button, Space, DatePicker, Select, Switch, message } from "antd";
import Context from "./Context";

const CreateContact = ({ onCancelClick }) => {
  const [form] = Form.useForm();
  const { addNewContact } = React.useContext(Context);
  const { Option } = Select;
  let availability_value = "Yes";
  
  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFormFinish = (values) => {
    const modifiedValues = {...values, birthday: values.birthday.format('YYYY-MM-DD HH:mm:ss'), availability: availability_value} //copied all values from values

    addNewContact(modifiedValues);
    message.success('This is a success message');
    onCancelClick();
  };

  function onChange(checked) {
    if (checked){
      availability_value = "Yes";
    }
    else {
      availability_value = "No";
    }
    console.log(`switch to ${checked}`);
  }

  return (
    <Form form={form} onFinish={onFormFinish} layout="horizontal">
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input contact name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Date of Birth"
        rules={[
          {
            required: true,
            message: "Please input birth date",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="availability"
        label="Available?"
        
      >
        <Switch defaultChecked onChange={onChange} />
      </Form.Item>
      
      
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Add Contact
          </Button>
          <Button type="primary" danger onClick={onCancelClick}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
      
    </Form>
    
  );
};

export default CreateContact;
