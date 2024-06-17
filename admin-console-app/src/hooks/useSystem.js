import useHttp from "./useHttp";

const useSystem = () => {
  const { post } = useHttp();
  const getSystem = async () => {
    return await post("/api/v1/system", {}, null);
  };

  return {
    getSystem,
  };
};

export default useSystem;
