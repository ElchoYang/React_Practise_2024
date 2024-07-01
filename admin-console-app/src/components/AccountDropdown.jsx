import { Dropdown } from "antd";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import logo from '../logo.svg'
import useSecurity from '../hooks/useSecurity'


const AccountDropdown = () => {

    const { logout } = useSecurity()
    const navaigate = useNavigate()
    const items = [
        {
            label:
                <button className="font-bold text-primary"
                    onClick={() => { navaigate("/home/userinfo") }}>
                    用户信息
                </button>
            ,
            key: "1"

        }
        ,
        { type: 'divider' },
        {
            label: <button className="font-bold text-warning">主题切换</button>,
            key: "2",
            onClick: logout
        },
        { type: 'divider' },
        {
            label: <button className="font-bold text-warning">登出</button>,
            key: "3",
            onClick: logout
        }
    ]

    return (
        <>
            <Dropdown menu={{ items }} >
                <a onClick={(e) => e.preventDefault()}>
                    <img className="w-8 h-8 rounded-full" src={logo} alt="" />
                </a>
            </Dropdown>
        </>
    )
}

export default AccountDropdown