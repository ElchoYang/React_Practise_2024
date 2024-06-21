import React, { useState, createContext, useContext } from 'react'
import LoginHeader from '../components/login/LoginFormHeader.jsx'
import SubmitMessage from '../components/login/SubmitMessage.jsx'
import useSecurity from '../hooks/useSecurity.js'
import { useNavigate } from "react-router-dom";
import { Spin, Button, Input, Form, Row, Col, Card, Space } from 'antd';


const LoginView = () => {

    const navigate = useNavigate()

    const { loginInfo, setLoginInfo, login, logout } = useSecurity()
    const [errorMsg, setErrorMsg] = useState({ color: '', message: '' })
    const [spinning, setSpinning] = useState(false);

    const handelLogin = async () => {
        try {
            setSpinning(true)
            await login()
            navigate('/home', { replace: true })
        } catch {
            setErrorMsg({ color: 'red', message: '登录失败！' })
        } finally {
            setSpinning(false)
        }
    }

    const handelChangeName = (e) => {
        setLoginInfo({
            userName: e.target.value,
            psw: loginInfo.psw
        })
    }

    const handelChangePsw = (e) => {
        setLoginInfo({
            userName: loginInfo.userName,
            psw: e.target.value
        })
    }

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <>

            <Spin spinning={spinning} fullscreen />;

            <Row gutter={16}>
                <Col span={8} offset={8}>
                    <Card title={<LoginHeader />} bordered={false} className='LoginCard'>
                        <Form className='Loginform'
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal">
                            <Form.Item label="Account">
                                <Input type='text' name="account" onChange={(e) => { handelChangeName(e) }} />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input type="password" name="password" onChange={(e) => { handelChangePsw(e) }} />
                            </Form.Item>


                            <Form.Item {...tailLayout}>
                                <Space>
                                    <Button type='primary' onClick={handelLogin} >Submit</Button>
                                </Space>
                                <SubmitMessage value={errorMsg} />

                            </Form.Item>

                        </Form>
                    </Card>
                </Col>
            </Row>
            {/* <div className="LoginContainer">
                <LoginHeader />
                <Form className='Loginform'
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal">
                    <Form.Item label="Account">
                        <Input type='text' name="account" onChange={(e) => { handelChangeName(e) }} />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input type="password" name="password" onChange={(e) => { handelChangePsw(e) }} />
                    </Form.Item>

                    <Button type='primary' onClick={handelLogin} >Submit</Button>
                    <SubmitMessage value={errorMsg} />

                </Form>
            </div > */}

        </>
    )
};

export default LoginView;