import React, {useEffect, useState} from "react";
import {Card, Row, Col, Input, Form, Button, Select, Alert} from "antd";
import {KeyOutlined, LockOutlined} from "@ant-design/icons";
import {InputNumber} from "antd/es";

const {Option} = Select;

import {
  food_pack_table as foodPackMapping,
  pet_table as petData,
  food_table as foodData,
  pack_table as packData,
  pet_pack_table as petPackMapping
} from './someData'

const DataCollectPage = () => {
  const [accessToken, setAccessToken] = useState();
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);

  let accessTokenTimeout = undefined;

  const [packSelected, setPackSelected] = useState(1);
  const [petsSelected, setPetsSelected] = useState([{petId: null},{petId: null},{petId: null},{petId: null},{petId: null}]);

  const [pets, setPets] = useState(petData);
  const [food, setFood] = useState(foodData);
  const [packs, setPacks] = useState(packData);

  const [response, setResponse] = useState({payload: undefined, error: undefined});

  const petStatsMargin = '10px';

  const CheckResponse = (res) => {
    let obj = {
      payload: undefined,
      error: undefined
    }

    if (!res.error) {
      obj.payload = res.data ?? 'success';
      form.resetFields();
    } else {
      obj.error = res.status;
    }

    setResponse(res);
    setIsLoading(false);
    return obj;
  }

  const onSuccessFulSubmit = (data) => {
    data.petsUsed = data.petsUsed.map(el => {
      return el.petId ? {...el} : {petId: null}
    });

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-auth', accessToken);

    let raw = JSON.stringify(data);

    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    setIsLoading(true);
    setResponse({});

    fetch(`/api/wAuth/game`, requestOptions)
      .then(res => res.json())
      .then(res => CheckResponse(res))
      .catch(err => ({payload: undefined, error: err.message}));
  }

  const debounceUpdateAccessKey = (value) => {
    clearTimeout(accessTokenTimeout);
    accessTokenTimeout = setTimeout(() => {
      setAccessToken(value);
    }, 300);
  }

  useEffect(() => {
    const packId = form.getFieldsValue().packId;

    const petIdList = petPackMapping.filter(e => e.packId === packId).map(e => e.petId);
    setPets(petData.filter(e => petIdList.includes(e.id)));

    const foodIdList = foodPackMapping.filter(e => e.packId === packId).map(e => e.foodId);
    setFood(foodData.filter(e => foodIdList.includes(e.id)));
  }, [packSelected]);

  return (<>
    <Row justify='center' style={{marginTop: '20px'}}>
      <Col xl={18} xs={22}>
        <Card title='Authentication'>
          <Row justify='center'>
            <Col span={20}>
              <Input
                size='large'
                placeholder='Access Token'
                prefix={<LockOutlined/>}
                onChange={(e) => {
                  debounceUpdateAccessKey(e.target.value)
                }}
              />
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xl={18} xs={22}>
        <Card title='Game Data' style={{marginTop: '20px'}}>
          <Form
            onFinish={onSuccessFulSubmit}
            layout='vertical'
            form={form}
          >
            {
              response.payload && (<Row justify='center'>
                <Col span={20}>
                  <Alert
                    message={response.payload}
                    type='success'
                    style={{marginBottom: '20px'}}
                  />
                </Col>
              </Row>)
            }

            {
              response.error && (<Row justify='center'>
                <Col span={20}>
                  <Alert
                    message={response.error}
                    type='error'
                    style={{marginBottom: '20px'}}
                  />
                </Col>
              </Row>)
            }

            <Row justify='center' style={{marginBottom: '20px'}}>
              <Col span={4}>
                <Card title='Round Ended'>
                  <Form.Item
                    name='roundEnded'
                    rules={[
                      {required: true, message: 'Round Ended is required'},
                      {type: 'number', min: 1, message: 'Round needs to be at least 1'}
                    ]}
                  >
                    <InputNumber placeholder='Enter Round' style={{width: '100%'}}/>
                  </Form.Item>
                </Card>
              </Col>
              <Col span={4}>
                <Card title='Health Left'>
                  <Form.Item
                    name='healthLeft'
                    rules={[
                      {required: true, message: 'Health Left is required'},
                      {type: 'number', min: 0, max: 10, message: 'Health left needs to be in range of 1 - 10'}
                    ]}
                  >
                    <InputNumber placeholder='Enter Health' style={{width: '100%'}}/>
                  </Form.Item>
                </Card>
              </Col>
              <Col span={4}>
                <Card title='Result'>
                  <Form.Item
                    name='win'
                    initialValue={true}
                    rules={[
                      {required: true, message: 'Result is required'}
                    ]}
                  >
                    <Select>
                      <Option value={true} key={0}>Win</Option>
                      <Option value={false} key={1}>Lose</Option>
                    </Select>
                  </Form.Item>
                </Card>
              </Col>
              <Col span={4}>
                <Card title='Pet Went For'>
                  <Form.Item
                    name='petWentForId'
                    rules={[
                      {required: true, message: 'Pet Went For is required'}
                    ]}
                  >
                    <Select
                      placeholder='Select pet'
                      showSearch={true}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      {
                        pets.map((el, i) => (
                          <Option value={el.id} key={i}>{el.name}</Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Card>
              </Col>
              <Col span={4}>
                <Card title='Pack Used'>
                  <Form.Item
                    name='packId'
                    rules={[
                      {required: true, message: 'Pack Used is required'}
                    ]}
                    initialValue={1}
                  >
                    <Select placeholder='Select pack' onChange={(val) => {
                      setPackSelected(val)
                    }}>
                      {
                        packs.map((el, i) => (
                          <Option value={el.id} key={i}>{el.name}</Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Card>
              </Col>
            </Row>
            <Form.List name='petsUsed' initialValue={petsSelected}>
              {(fields) => (
                <Row justify='center' style={{marginBottom: '20px'}}>
                  {fields.map((el, i) => (
                    <Col span={4} key={i}>
                      <Card title={`Pet stats Slot-${i + 1}`}>
                        <Row>
                          <Col span={24}>
                            <Form.Item
                              style={{marginBottom: petStatsMargin}}
                              name={[i, 'petId']}
                              label='🐕 Pet played'
                            >
                              <Select
                                placeholder='Select pet'
                                showSearch={true}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                filterSort={(optionA, optionB) =>
                                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                                onChange={(e) => {
                                  const newPets = [...petsSelected];
                                  newPets[i].petId = e;
                                  setPetsSelected(newPets);
                                }}
                              >
                                <Option value={null}>None</Option>
                                {
                                  pets.map((el, i) => (
                                    <Option value={el.id} key={i}>{el.name}</Option>
                                  ))
                                }
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        {
                          petsSelected[i].petId && (
                            <Row>
                              <Col span={24}>
                                <Form.Item
                                  style={{marginBottom: petStatsMargin}}
                                  label='🍕 Food equipped'
                                  name={[i, 'foodId']}
                                  rules={[
                                    {required: false, message: 'Pet is required'}
                                  ]}
                                >
                                  <Select
                                    placeholder='Select food'
                                    showSearch={true}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                  >
                                    {
                                      food.filter(el => el.equip).map((el, i) => (
                                        <Option value={el.id} key={i}>{el.name}</Option>
                                      ))
                                    }
                                  </Select>
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  style={{marginBottom: petStatsMargin}}
                                  label='⚔️  Attack of pet'
                                  name={[i, 'attack']}
                                  rules={[
                                    {required: true, message: 'Attack is required'},
                                    {type: 'number', max: 50, message: 'Attack can be 50 at max'}
                                  ]}
                                >
                                  <InputNumber placeholder='Enter Attack' style={{width: '100%'}}/>
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  style={{marginBottom: petStatsMargin}}
                                  label='💓  Health of pet'
                                  name={[i, 'health']}
                                  rules={[
                                    {required: true, message: 'Health is required'},
                                    {type: 'number', max: 50, message: 'Health can be 50 at max'}
                                  ]}
                                >
                                  <InputNumber placeholder='Enter Health' style={{width: '100%'}}/>
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  style={{marginBottom: petStatsMargin}}
                                  label='🍫 Level of pet'
                                  name={[i, 'level']}
                                  rules={[
                                    {required: true, message: 'Level is required'},
                                    {type: 'number', min: 1, max: 3, message: 'Level needs to be in range of 1 - 3'}
                                  ]}
                                >
                                  <InputNumber placeholder='Enter Level' style={{width: '100%'}}/>
                                </Form.Item>
                              </Col>
                            </Row>
                          )}
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </Form.List>
            <Row justify='center'>
              <Col span={20}>
                <Form.Item>
                  <Button type='primary' htmlType='submit' style={{width: '100%'}} size='large' loading={isLoading}>
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  </>)
}

export default DataCollectPage;