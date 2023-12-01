import ApiService from "../../service/ApiService";

const useLoginUser = () => {
  
  const { auth, initToken } = ApiService();
  const login = async (payload) => {
    const response = await auth(payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const headers = initToken(response.data.access_token);
    return {
      response: response.data,
      headers: headers,
    };
  };

  return {
    login: login,
  };
};

export default useLoginUser;
