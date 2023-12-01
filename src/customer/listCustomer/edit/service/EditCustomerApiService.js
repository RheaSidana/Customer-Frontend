import ApiService from "../../../../service/ApiService";

const EditCustomerApiService = () => {
  const { put } = ApiService();
  const param = "cmd=update&uuid=";

  return {
    editCustomer: async (id, payload, header) => {
      const response = await put(`${param + id}`, payload, header);

      return response.data;
    },
  };
};

export default EditCustomerApiService;
