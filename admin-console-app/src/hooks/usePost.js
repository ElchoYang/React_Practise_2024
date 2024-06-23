import { useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { add, list } from "../store/slice/PostSlice";

import useHttp from "./useHttp";

const usePost = () => {
  const { post } = useHttp();
  const dispatch = useDispatch();
  const store = useStore();

  const [article, setArticle] = useState({
    id: null,
    title: "",
    content: "",
  });

  const submit = async () => {
    article.id = Math.random().toString;
    dispatch(add(article));

    return await post("/api/v1/post/submit", {}, article);
  };

  const getPostList = async () => {
    var data = store.getState().post.value;
    console.log("store = ", data);
    return Promise.resolve(data);
    //return await post("/api/v1/post/list", {}, null);
  };

  return {
    article,
    setArticle,
    submit,
    getPostList,
  };
};

export default usePost;
