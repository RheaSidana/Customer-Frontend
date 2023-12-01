import ApiService from "../../../service/ApiService";

const useAddCustomerApi = () => {
  const { post } = ApiService();
  const param = "cmd=create";

  return {
    postAddCustomer: async (payload, header) => {
      const response = await post(`${param}`, payload, header);

      return response.data;
    },
  };
};

export default useAddCustomerApi;
