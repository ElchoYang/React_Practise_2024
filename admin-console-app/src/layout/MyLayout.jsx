import SideBar from "./SideBar";
import MyHeader from "./MyHeader";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import { Layout } from 'antd';

const MyLayout = () => {

    return (
        <>

            <Layout style={{
                minHeight: '100vh',
            }}>
                <SideBar></SideBar>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <MyHeader></MyHeader>
                    <MyContent></MyContent>
                    <MyFooter></MyFooter>

                </Layout>
            </Layout>

        </>
    )
}

export default MyLayout