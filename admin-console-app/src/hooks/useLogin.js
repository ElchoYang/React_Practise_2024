import { useState } from "react";
import request from ".././utils/APIRequest";

const useLogin = () => {
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    psw: "",
  });

  const handleLogin = async () => {
    const res = await request.post("/api/v1/login", {
      userName: loginInfo.userName,
      pwd: loginInfo.psw,
    });

    if (res.succ) {
      localStorage.setItem("token", res.data);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  };

  const handleLogout = async () => {
    const res = await request.post("/api/v1/logout");
    localStorage.removeItem("token");
    return Promise.resolve();
  };

  const isLogin = () => {
    const token = localStorage.getItem("token");
    return token != null && token != "";
  };

  return {
    loginInfo,
    setLoginInfo,
    handleLogin,
    handleLogout,
    isLogin,
  };
};

export default useLogin;
