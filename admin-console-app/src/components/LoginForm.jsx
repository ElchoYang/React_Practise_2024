import { useState } from 'react'



const LoginForm = () => {


    const [form, setForm] = useState({
        account: '',
        password: ''
    })

    const onSubmit = () => {
        alert('Submit')
    }

    return (
        <>
            <div className="LoginContainer">
                <h3>系统登录</h3>
                <form className="Loginform">
                    <input type='text' placeholder="admin"  ></input>
                    <input type="password" placeholder="***" ></input>
                    <button type='button' onClick={onSubmit}  >Submit</button>
                </form>
            </div>
        </>
    )
};

export default LoginForm;