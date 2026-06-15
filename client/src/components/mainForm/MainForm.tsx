import { Button, Form, Input, InputNumber, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

export const ManinForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Total Amount"
        name="amount"
        rules={[{ required: true }]}
      >
        <InputNumber
          style={{ width: '100%' }}
          min={0}
          placeholder="Enter amount"
        />
      </Form.Item>

      <Form.List name="items">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 12,
                }}
              >
                <Form.Item
                  name={[name, 'name']}
                  rules={[{ required: true, message: 'Enter name' }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item
                  name={[name, 'value']}
                  rules={[{ required: true, message: 'Enter value' }]}
                >
                  <InputNumber
                    min={0}
                    max={99}
                    placeholder="00"
                  />
                </Form.Item>

                <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => remove(name)}
                />
              </Space>
            ))}

            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={() => add()}
              block
            >
              Add Row
            </Button>
          </>
        )}
      </Form.List>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};