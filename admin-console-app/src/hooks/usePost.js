import { useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import {
  add,
  edit,
  remove,
  initList,
  startPost,
  saveCurrentPost,
} from "../store/slice/PostSlice";

import useHttp from "./useHttp";

const usePost = () => {
  const { post } = useHttp();
  const dispatch = useDispatch();
  const poster = useSelector((state) => state.poster);

  const [article, setArticle] = useState({
    id: null,
    title: "",
    content: "",
  });

  const openForm = (isEdit, item) => {
    dispatch(startPost(true));
    dispatch(saveCurrentPost(item));
    console.log("openForm item", item);
    console.log("openForm article", article);
  };
  const closeForm = () => {
    dispatch(startPost(false));
  };
  const removeItem = (id) => {
    dispatch(deleteAsync(id));
  };
  const handelSubmit = async (e) => {
    try {
      if (poster.currentPost.id != null) {
        dispatch(editAsync());
      } else {
        dispatch(addAsync());
      }
      closeForm();

      getPostList();
    } catch {}
  };

  const addAsync = () => async (dispatch) => {
    var data = await post("/api/v1/post/submit", {}, article);
    console.log("addAsync", article);
    dispatch(add(data));
  };
  const editAsync = (poster) => async (dispatch) => {
    console.log("editAsync", article);
    var data = await post("/api/v1/post/edit", {}, article);
    dispatch(edit(article));
  };
  const deleteAsync = (id) => async (dispatch) => {
    await post("/api/v1/post/delete", {}, id);
    console.log(id);
    dispatch(remove(id));
  };
  const getPostList = () => async (dispatch) => {
    var list = await post("/api/v1/post/list", {}, {});
    dispatch(initList(list));
  };

  return {
    article,
    setArticle,
    addAsync,
    editAsync,
    deleteAsync,
    getPostList,
    openForm,
    closeForm,
    removeItem,
    handelSubmit,
  };
};

export default usePost;
