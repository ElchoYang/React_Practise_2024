import React, { useState, useEffect } from 'react';
import { Menu, Layout, theme } from 'antd';
import useRoute from './../hooks/useRoute';
import { useSelector, useStore } from "react-redux";

const { Sider } = Layout;

const SideBar = ({ messageApi }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { getRoutes, handelMenu } = useRoute();
    const router = useSelector(state => state.router)

    useEffect(() => {
        getRoutes()
    }, [])

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>

                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" items={router.list} onClick={handelMenu} />
            </Sider>
        </>
    )
}


export default SideBar;