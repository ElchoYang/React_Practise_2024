import React, { useState, useEffect } from 'react';
import { Menu, Layout, theme } from 'antd';
import useSecurity from './../hooks/useSecurity';
import { useSelector, useStore } from "react-redux";
import * as Icon from "@ant-design/icons"

const { Sider } = Layout;

const SideBar = ({ messageApi }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [menuList, setMenuList] = useState([]);

    const { getUserInfo, handelMenu } = useSecurity();
    const menus = useSelector(state => state.security.menus)

    const fetchUserInfo = async () => {
        await getUserInfo()
    }

    // 初始化获取后台用户信息，menus
    useEffect(() => {
        fetchUserInfo()
    }, [])

    // 构建本地SideBar menulist，当store的menus有更新
    useEffect(() => {
        const list = []
        menus.map(item => {
            list.push({
                // ...item,
                label: item.label,
                key: item.key,
                icon: iconToElement(item.iconName)
            })
        })
        setMenuList(list)
    }, [menus])


    // 创建icon图标元素
    const iconToElement = (name) =>
        React.createElement(Icon && (Icon)[name], {
            // style: { fontSize: '16px' }
        })

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>

                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" items={menuList} onClick={handelMenu} />
            </Sider>
        </>
    )
}


export default SideBar;