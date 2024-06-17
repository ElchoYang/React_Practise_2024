import { useState } from "react";
import useHttp from "./useHttp";
import { useLocalStorage } from "@uidotdev/usehooks";

const useSecurity = () => {
  const { post } = useHttp();

  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    psw: "",
  });

  const [token, saveToken] = useLocalStorage("sec-token", null);
  const [expire, saveExpire] = useLocalStorage("sec-expire", null);

  const login = async () => {
    const data = await post(
      "/api/v1/login",
      {},
      {
        userName: loginInfo.userName,
        pwd: loginInfo.psw,
      }
    );

    saveToken(data.token);
    saveExpire(new Date().getTime() + data.expire);
  };

  const logout = async () => {
    await post("/api/v1/logout", {}, {});
    saveToken(null);
    saveExpire(null);
  };

  const isLogin = () => {
    return token != null && expire != null && expire - new Date().getTime() > 0;
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
