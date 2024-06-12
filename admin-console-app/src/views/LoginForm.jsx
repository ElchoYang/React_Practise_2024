import React, { useState } from 'react'
import LoginHeader from '../components/login/LoginFormHeader'
import SubmitMessage from '../components/login/SubmitMessage'
import useLogin from '.././hooks/useLogin.js'

const LoginForm = () => {

    const { loginInfo, setLoginInfo, handleLogin } = useLogin()
    const [errorMsg, setErrorMsg] = useState({ color: '', message: '' })

    const onSubmit = () => {
        handleLogin().then(() => { setErrorMsg({ color: 'green', message: '登录成功' }) }).catch(() => { setErrorMsg({ color: 'red', message: '登录失败！' }) })
    }

    const handelChangeName = (e) => {
        setLoginInfo({
            userName: e.target.value,
            psw: loginInfo.psw
        })
    }

    const handelChangePsw = (e) => {
        setLoginInfo({
            userName: loginInfo.userName,
            psw: e.target.value
        })
    }

    return (
        <>
            <div className="LoginContainer">
                <LoginHeader />
                <form className="Loginform">
                    <input type='text' name="account" placeholder="admin" onChange={(e) => { handelChangeName(e) }}  ></input>
                    <input type="password" name="password" placeholder="***" onChange={(e) => { handelChangePsw(e) }}    ></input>
                    <button type='button' onClick={onSubmit} >Submit</button>
                    <SubmitMessage value={errorMsg} />
                </form>
            </div >
        </>
    )
};

export default LoginForm;