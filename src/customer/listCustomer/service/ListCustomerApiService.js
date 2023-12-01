import ApiService from "../../../service/ApiService";

const useListCustomerApiService = () => {
  const { get } = ApiService();
  const param = "cmd=get_customer_list";

  return {
    customerList: async (header) => {
      const response = await get(`${param}`, header);

      return response.data;
    },
  };
};

export default useListCustomerApiService;
