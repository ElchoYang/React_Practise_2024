import { useState } from "react";
import useHttp from "./useHttp";
import { useLocalStorage } from "@uidotdev/usehooks";
import { setMenus, setToken } from "../store/slice/SecuritySlice";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSecurity = () => {
  const { post } = useHttp();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    psw: "",
  });

  const menus = useSelector((state) => state.security.menus);

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

  const getUserInfo = async () => {
    let data = await post(" /api/v1/userInfo", {}, null);

    dispatch(setMenus(data.menus));
    // dispatch(setToken(data.token));
  };

  const handelMenu = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath, domEvent);
    navigate(key, { replace: true });
  };

  return {
    loginInfo,
    setLoginInfo,
    login,
    logout,
    isLogin,
    getUserInfo,
    menus,
    handelMenu,
  };
};

export default useSecurity;
