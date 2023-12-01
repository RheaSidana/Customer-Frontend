import ApiService from '../../../../service/ApiService';

const DeleteCustomerApiService = () => {
  const { del } = ApiService();
    const param = "cmd=delete&uuid=";
  
  return {
    deleteCustomer: async (id, header) => {
        const response = await del(
            `${param+id}`, header
        );

        return response.data;
    },
  };
}

export default DeleteCustomerApiService;