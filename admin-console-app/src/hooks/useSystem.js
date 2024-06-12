import request from ".././utils/APIRequest";

const useSystem = () => {
  const getSystem = async () => {
    const res = await request.post("/api/v1/system", null);
    if (res.succ) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res.message);
    }
  };

  return {
    getSystem,
  };
};

export default useSystem;
