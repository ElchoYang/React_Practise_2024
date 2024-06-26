import useSecurity from '../hooks/useSecurity.js'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Layout, theme, Button } from 'antd';
import { HEADER_HEIGHT } from './config'
import AccountDropdown from './../components/AccountDropdown'
import { useDesignToken } from "../theme/hooks/useDesignToken";
import SystemName from './../components/SystemName.jsx'

const { Header } = Layout;

const MyHeader = () => {

  const { colorBgElevated, colorBgContainer, colorTextBase } = useDesignToken();

  const headerStyle = {
    position: 'fixed',
    borderBottom: '',
    backgroundColor: colorBgElevated,
    right: '0px',
    left: 'auto',
    width: '100vw',
  }


  return (
    <>
      <Header style={{
        padding: 0, background: colorBgContainer, justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex',
      }}  >

        <div
          className="flex items-center justify-between flex-grow px-4 text-gray xl:px-6 2xl:px-10"
          style={{
            height: HEADER_HEIGHT,
          }}
        >
          <div className="flex items-baseline">

            <SystemName />
          </div>
          <div className='flex'>
            <AccountDropdown />
          </div>
        </div>
      </Header >
    </>
  )
}


export default MyHeader;