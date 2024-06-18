import { useState } from "react";
import useHttp from "./useHttp";
import { useLocalStorage } from "@uidotdev/usehooks";

const useSecurity = () => {
  const { post } = useHttp();

  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    psw: "",
  });

  const [token, saveToken] = useLocalStorage("sec-token", {
    token: null,
    expire: null,
  });

  const login = async () => {
    const data = await post(
      "/api/v1/login",
      {},
      {
        userName: loginInfo.userName,
        pwd: loginInfo.psw,
      }
    );

    const evidence = {
      ...data,
      loginTime: Date.now(),
    };

    saveToken(evidence);
  };

  const logout = async () => {
    await post("/api/v1/logout", {}, {});
    saveToken(null);
  };

  const isLogin = () => {
    return token != null && Date.now() - token.loginTime <= token.expire * 1000;
  };

  return {
    loginInfo,
    setLoginInfo,
    login,
    logout,
    isLogin,
  };
};

export default useSecurity;
