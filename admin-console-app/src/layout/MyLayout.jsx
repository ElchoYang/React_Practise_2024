import SideBar from "./SideBar";
import MyHeader from "./MyHeader";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import { Layout, Spin } from 'antd';
import { useSelector, useDispatch, useStore } from "react-redux";
import { message } from "antd";

const MyLayout = () => {
    const spinnig = useSelector((state) => state.spinner.spinning);
    const [messageApi, contextHolder] = message.useMessage()

    return (
        <>
            <Spin spinning={spinnig} fullscreen />
            <Layout style={{
                minHeight: '100vh',
            }}>

                <SideBar messageApi={messageApi} ></SideBar>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <MyHeader></MyHeader>
                    <MyContent></MyContent>
                    <MyFooter></MyFooter>
                    {contextHolder}
                </Layout>
            </Layout>

        </>
    )
}

export default MyLayout