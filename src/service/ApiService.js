import axios from "axios";
import { urls } from "../config/env-config";
import { useState } from "react";

const ApiService = () => {
  const [bearerToken, setBearerToken] = useState("");
  const path = "sunbase/portal/api/assignment.jsp";
  const authPath = "/api/assignment_auth.jsp";

  const assign = (token) => {
    setBearerToken(token);
    const headersAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    };

    return headersAuth;
  };

  const promiseWithErrorHandling = (promise) => {
    return promise.catch((err) => {
      if (err.response && err.response.status === 500) {
        console.error("error", err);
        // window.location.assign("/error");
      } else {
        console.error("error", err);
        throw err;
      }
    });
  };

  const getHeaders = () => {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    };
  };

  return {
    auth: async (payload) => {
      return promiseWithErrorHandling(
        axios.post(`${authPath}`, payload, {
          headers: getHeaders(),
        })
      );
    },
    post: async (param, payload, header) => {
      return promiseWithErrorHandling(
        axios.post(`${urls.service}/${path}?${param}`, payload, header)
      );
    },
    get: async (params, header) => {
      // console.log("headerswithauth: ", header);
      return promiseWithErrorHandling(
        axios.get(`${urls.service}/${path}?${params}`, header)
      );
    },
    put: async (params, payload, header) => {
      return promiseWithErrorHandling(
        axios.put(`${urls.service}/${path}?${params}`, payload, header)
      );
    },
    del: async (params, header) => {
      return promiseWithErrorHandling(
        axios.delete(`${urls.service}/${path}?${params}`, header)
      );
    },
    initToken: assign,
  };
};

export default ApiService;
