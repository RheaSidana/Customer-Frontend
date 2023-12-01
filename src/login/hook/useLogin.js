import { useState } from "react";
import loginUser from "./../service/LoginApiService";

const useLogin = (setHeader) => {
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { login } = loginUser();

  const handleLoginUser = async (values, setAlert, setIsLoggedIn) => {
    const payload = {
      login_id: values.loginID,
      password: values.password,
    };

    try {
      const r = await login(payload);
      const resp = r.response;

      setIsLoading(false);
      setResponse(resp);
      setHeader(r.headers);
      setAlert(true);
      setIsLoggedIn(true);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.details[0]);
      } else {
        throw err;
      }
    }
  };
  return {
    error: error,
    handleLoginUser: handleLoginUser,
    response: response,
    isLoading: isLoading,
  };
};

export default useLogin;
