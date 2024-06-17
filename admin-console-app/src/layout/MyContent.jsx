import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
const { Content } = Layout;

const MyContent = () => {
    return (
        <>
            <Content style={{ margin: '0 16px' }}  >
                <Outlet></Outlet>
            </Content>
        </>
    )
}


export default MyContent;