import useHttp from "./useHttp";
import { setRoutes } from "./../store/slice/RouterSlice";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRoute = () => {
  const { post } = useHttp();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const router = useSelector((state) => state.router);

  const getRoutes = async () => {
    let data = await post("/api/v1/routes", {}, null);
    dispatch(setRoutes(data));
    return data;
  };

  const handelMenu = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath, domEvent);
    navigate(key, { replace: true });
  };

  return {
    getRoutes,
    handelMenu,
  };
};

export default useRoute;
