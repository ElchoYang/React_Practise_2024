import { Layout } from 'antd';
const { Footer } = Layout;


const MyFooter = () => {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                ADMIN CONSOLE APP ©{new Date().getFullYear()} Created
            </Footer>
        </>
    )

}


export default MyFooter