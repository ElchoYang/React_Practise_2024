import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu, Layout, theme } from 'antd';
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Home', '/home', <PieChartOutlined />),
    getItem('About', '/home/about', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
];
const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handelMenu = ({ item, key, keyPath, domEvent }) => {
        console.log(item, key, keyPath, domEvent)
        navigate(key, { replace: true })
    }

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" items={items} onClick={handelMenu} />
            </Sider>
        </>
    )
}


export default SideBar;