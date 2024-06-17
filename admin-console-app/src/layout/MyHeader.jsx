import useSecurity from '../hooks/useSecurity.js'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, theme, Button } from 'antd';
const { Header } = Layout;

const MyHeader = () => {

  const { logout } = useSecurity()
  const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const handelLogout = async () => {
    await logout()
    navigate('/', { replace: true })
  }

  return (
    <>
      <Header style={{
        padding: 0, background: colorBgContainer, justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex',
      }}  >
        <Button type="primary" onClick={handelLogout} >Logout</Button>
      </Header >
    </>
  )
}


export default MyHeader;