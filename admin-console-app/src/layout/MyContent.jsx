import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';
import { useDesignToken } from "../theme/hooks/useDesignToken";
import Scrollbar from "./../components/Scrollbar";

const { Content } = Layout;

const MyContent = (props) => {

    const { colorBgContainer, borderRadiusLG } = useDesignToken();
    const [breadcrumbItem, setBreadcrumbItem] = useState([])
    const location = useLocation();

    useEffect(() => {
        const arr = location.pathname.split('/').map(p => {
            return { 'title': p }
        })

        setBreadcrumbItem(arr)
    }, [location])

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItem} />

            <Content style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }} >
                {/* <Scrollbar style={{
                    height: 'calc(100vh - 70px)',
                }}> */}
                <Outlet></Outlet>
                {/* </Scrollbar> */}
            </Content>
        </>
    )
}


export default MyContent;