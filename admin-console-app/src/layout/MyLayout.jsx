import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MyHeader from "./MyHeader";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import { Layout } from 'antd';
import { GlobalSpinProvider, GlobalSpin } from './../components/GlobalSpin';

const MyLayout = () => {

    return (
        <>
            <GlobalSpinProvider>
                <GlobalSpin />
                <Layout style={{
                    minHeight: '100vh',
                }}>
                    <SideBar></SideBar>
                    <Layout>
                        <MyHeader></MyHeader>
                        <MyContent></MyContent>
                        <MyFooter></MyFooter>

                    </Layout>
                </Layout>
            </GlobalSpinProvider>
        </>
    )
}

export default MyLayout